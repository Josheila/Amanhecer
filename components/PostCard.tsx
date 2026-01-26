// /components/PostCard.tsx
import Link from "next/link";
import { Post } from "../lib/posts";

interface PostCardProps {
  post: Post;
  view: "card" | "list";
}

export default function PostCard({ post, view }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {view === "card" ? (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {post.cover && (
            <div style={{ height: "150px", overflow: "hidden" }}>
              <img
                src={post.cover}
                alt={post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}
          <div style={{ padding: "0.5rem 1rem" }}>
            <h3 style={{ margin: "0 0 0.5rem 0" }}>{post.title}</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
              {post.date}
            </p>
          </div>
        </div>
      ) : (
        <div
          style={{
            borderBottom: "1px solid #ccc",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center", // 垂直居中
            justifyContent: "space-between", // 左右分布
          }}
        >
          <span style={{ fontSize: "0.9rem", color: "#666" }}>{post.date}</span>
          <span style={{ fontWeight: 500 }}>{post.title}</span>
        </div>
      )}
    </Link>
  );
}
