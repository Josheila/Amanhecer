import styles from "../styles/Pagination.module.css";

interface BlogListPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function BlogListPagination({
  totalPages,
  currentPage,
  onPageChange,
}: BlogListPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <ul className={styles.pageNumbers}>
      <li>
        <button
          className={`${styles.pageNumber} ${styles.prev}`}
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
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
                  onClick={() => onPageChange(page)}
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
              <span className={`${styles.pageNumber} ${styles.dots}`}>…</span>
            </li>
          );
        }
        return null;
      })}

      <li>
        <button
          className={`${styles.pageNumber} ${styles.next}`}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </li>
    </ul>
  );
}
