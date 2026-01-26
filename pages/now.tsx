// /pages/now.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";

interface Post {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  cover?: string;
  content: string;
  slug: string;
}

interface NowPageProps {
  post: Post;
}

export default function NowPage({ post }: NowPageProps) {
  return (
    <div className="container">
      {/* Header: 直接显示 Posts 按钮 */}
      <Header buttons={[{ label: "Posts", href: "/posts" }]} />

      <main style={{ marginTop: "2rem" }}>
        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "1rem",
            }}
          />
        )}
        <h1>{post.title}</h1>
        <p style={{ color: "#888", marginBottom: "1rem" }}>{post.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </main>
    </div>
  );
}

// 读取 posts/fix/now.md
export async function getStaticProps() {
  const nowPath = path.join(process.cwd(), "posts/fix/now.md");
  const fileContents = fs.readFileSync(nowPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: Post = {
    slug: "now",
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags,
    cover: data.cover || null,
    content,
  };

  return {
    props: { post },
  };
}
