import { useState, useEffect } from "react";
import { Post } from "../lib/posts";
import { Diary } from "../lib/diary";
import { formatDate } from "../lib/date";
import styles from "../styles/BlogList.module.css";

type BlogItem = Post | Diary;

interface BlogListProps {
  items: BlogItem[];
  pageSize?: number;
  defaultView?: "card" | "list";
}

export default function BlogList({
  items,
  pageSize = 9,
  defaultView = "card",
}: BlogListProps) {
  const [viewMode, setViewMode] = useState<"card" | "list">(defaultView);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 判断是否移动端
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = items.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      {/* 视图切换按钮 */}
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
        className={viewMode === "card" ? styles.cardGrid : styles.listGrid}
        style={
          viewMode === "card" && isMobile
            ? { gridTemplateColumns: "repeat(2, 1fr)" }
            : undefined
        }
      >
        {paginatedItems.map((item: BlogItem) => {
          if (!("slug" in item)) return null;
          const href =
            "summary" in item
              ? `/posts/${item.slug}`
              : `/cozydiary/${item.slug}`;

          return viewMode === "card" ? (
            <a
              key={item.slug}
              href={href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.cardItem}>
                {item.cover && <img src={item.cover} alt={item.title} />}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDate}>{formatDate(item.date)}</p>
                </div>
              </div>
            </a>
          ) : (
            <a
              key={item.slug}
              href={href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.listItem}>
                <span className={styles.listTitle}>{item.title}</span>
                <span className={styles.listDate}>{formatDate(item.date)}</span>
              </div>
            </a>
          );
        })}
      </div>

      {/* 分页 */}
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
