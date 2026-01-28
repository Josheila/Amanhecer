import { useState } from "react";
import { Post } from "../lib/posts";
import { Diary } from "../lib/diary";
import { formatDate } from "../lib/date";
import styles from "../styles/BlogList.module.css";

type BlogItem = Post | Diary;

interface BlogListProps {
  items: Post[] | Diary[];
  pageSize?: number;
  defaultView?: "card" | "list";
}

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export default function BlogList({
  items,
  pageSize = 9,
  defaultView = "card",
}: BlogListProps) {
  const [viewMode, setViewMode] = useState<"card" | "list">(defaultView);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = items.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      {/* 切换视图按钮 */}
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

      {/* 列表内容 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            viewMode === "card"
              ? isMobile
                ? "repeat(2, 1fr)"
                : "repeat(3, 1fr)"
              : "1fr",
          gap: "1rem",
        }}
      >
        {paginatedItems.map((item: BlogItem) => {
          // 类型守卫
          if (!("slug" in item)) return null;

          const href =
            "summary" in item
              ? `/posts/${item.slug}`
              : `/cozydiary/${item.slug}`;

          return (
            <a
              key={item.slug}
              href={href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {viewMode === "card" ? (
                <div
                  style={{
                    border: "1px solid var(--color-gray-3)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {item.cover && (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.cover}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          // borderRadius: "10px",
                        }}
                      />
                    </div>
                  )}
                  <div style={{ padding: "0.5rem 1rem" }}>
                    <h3
                      style={{
                        margin: "0 0 0.5rem 0",
                        fontWeight: 400,
                        fontSize: "1rem",
                        color: "var(--color-gray-500)",
                        height: "2.5rem", // 固定高度
                        overflow: "hidden", // 太长的文字截断
                        textOverflow: "ellipsis", // 显示省略号
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.9rem",
                        color: "var(--color-gray-400)",
                      }}
                    >
                      {formatDate(item.date)} {/* ✅ 用 formatDate */}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    borderBottom: "0.5px solid var(--color-gray-200)",
                    padding: "0.5rem 4px",
                    cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{ fontWeight: 400, color: "var(--color-gray-500)" }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-gray-400)",
                    }}
                  >
                    {formatDate(item.date)} {/* ✅ 用 formatDate */}
                  </span>
                </div>
              )}
            </a>
          );
        })}
      </div>

      {/* 翻页 */}
      {totalPages > 1 && (
        <ul className={styles.pageNumbers}>
          <li>
            <button
              className={`${styles.pageNumber} ${styles.prev}`}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              «
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <li key={page}>
                  {page === currentPage ? (
                    <span className={`${styles.pageNumber} ${styles.current}`}>
                      {page}
                    </span>
                  ) : (
                    <button
                      className={styles.pageNumber}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  )}
                </li>
              );
            }
            if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <li key={page}>
                  <span className={`${styles.pageNumber} ${styles.dots}`}>
                    …
                  </span>
                </li>
              );
            }
            return null;
          })}

          <li>
            <button
              className={`${styles.pageNumber} ${styles.next}`}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
