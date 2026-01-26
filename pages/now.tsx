// /pages/now.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import { formatDate } from "../lib/date";

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
      <Header buttons={[{ label: "Home", href: "/" }]} />

      <main style={{ marginTop: "2rem" }}>
        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            style={{
              width: "50%",
              // height: "250px",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "1rem",
            }}
          />
        )}

        <h1>{post.title}</h1>
        <p
          style={{
            color: "var(--color-gray-400)",
            fontSize: "16px",
            marginBottom: "1rem",
          }}
        >
          {formatDate(post.date)}
        </p>
        <div style={{ color: "var(--color-gray-500)", fontSize: "14px" }}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
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
