// /components/PostList.tsx
import { useState } from "react";
import { Post } from "../lib/posts";
import PostCard from "./PostCard";
import styles from "../styles/PostList.module.css";

interface PostListProps {
  posts: Post[];
  pageSize?: number; // 每页显示数量
}

export default function PostList({ posts, pageSize = 9 }: PostListProps) {
  const [viewMode, setViewMode] = useState<"card" | "list">("card");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPosts = posts.slice(startIndex, startIndex + pageSize);

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
          gridTemplateColumns: viewMode === "card" ? "repeat(3, 1fr)" : "1fr",
          gap: "1rem",
        }}
      >
        {paginatedPosts.map((post) => (
          <PostCard key={post.slug} post={post} view={viewMode} />
        ))}
      </div>

      {/* 翻页按钮 */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span className={styles.pageInfo}>
            {currentPage} / {totalPages}
          </span>

          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
