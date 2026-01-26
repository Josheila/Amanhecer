// /components/PostList.tsx
import { useState } from "react";
import { Post } from "../lib/posts";
import PostCard from "./PostCard";
import styles from "../styles/PostList.module.css"; // 新建 CSS 文件

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  const [viewMode, setViewMode] = useState<"card" | "list">("card");

  return (
    <div>
      {/* 切换图标按钮 */}
      <div className={styles.viewSwitch}>
        <img
          src="/icon/view_gallery.svg"
          alt="卡片视图"
          className={styles.iconButton}
          onClick={() => setViewMode("card")}
        />
        <img
          src="/icon/view_list.svg"
          alt="列表视图"
          className={styles.iconButton}
          onClick={() => setViewMode("list")}
        />
      </div>

      {/* posts 列表 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            viewMode === "card"
              ? "repeat(auto-fit, minmax(250px, 1fr))"
              : "1fr",
          gap: "1rem",
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} view={viewMode} />
        ))}
      </div>
    </div>
  );
}
