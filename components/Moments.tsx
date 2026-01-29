// components/Status.tsx
import { useState } from "react";
import { formatDate } from "../lib/date";
import styles from "../styles/Moments.module.css";

export interface StatusType {
  date: string;
  content: string;
}

interface Props {
  statuses: StatusType[];
  pageSize?: number;
}

export default function Status({ statuses, pageSize = 10 }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  // 按日期倒序显示最新在前
  const sorted = [...statuses].sort((a, b) => (a.date < b.date ? 1 : -1));

  const totalPages = Math.ceil(sorted.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = sorted.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      {/* 状态列表 */}
      <div className={styles.statusList}>
        {paginatedItems.map((status, index) => (
          <div key={index} className={styles.statusCard}>
            <p style={{ whiteSpace: "pre-line" }}>{status.content}</p>
            <small>{formatDate(status.date, 2)}</small>
          </div>
        ))}
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
