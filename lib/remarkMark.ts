type MdastNode = {
  type?: string;
  value?: string;
  children?: MdastNode[];
  data?: Record<string, unknown>;
};

const highlightPattern = /==([^=]+)==/g;

const toMarkNode = (value: string): MdastNode => ({
  type: "emphasis",
  children: [{ type: "text", value }],
  data: { hName: "mark" },
});

const splitTextToNodes = (text: string): MdastNode[] => {
  const nodes: MdastNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = highlightPattern.exec(text))) {
    const [raw, inner] = match;
    const start = match.index;
    const end = start + raw.length;

    if (start > lastIndex) {
      nodes.push({ type: "text", value: text.slice(lastIndex, start) });
    }
    nodes.push(toMarkNode(inner));
    lastIndex = end;
  }

  if (lastIndex < text.length) {
    nodes.push({ type: "text", value: text.slice(lastIndex) });
  }

  return nodes;
};

const walk = (node: MdastNode) => {
  if (!node.children) return;
  if (node.type === "code" || node.type === "inlineCode") return;

  node.children = node.children.flatMap((child) => {
    if (child.type === "text" && child.value && child.value.includes("==")) {
      return splitTextToNodes(child.value);
    }
    return [child];
  });

  node.children.forEach(walk);
};

const remarkMark = () => (tree: MdastNode) => {
  walk(tree);
};

export default remarkMark;
