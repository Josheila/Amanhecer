import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { PostMeta } from "../lib/posts";
import { DiaryMeta } from "../lib/diary";
import { formatDate } from "../lib/date";
import styles from "../styles/BlogList.module.css";
import { BLUR_DATA_URL } from "../lib/blur";

const BlogListControls = dynamic(() => import("./BlogListControls"));
const BlogListPagination = dynamic(() => import("./BlogListPagination"));

type BlogItem = PostMeta | DiaryMeta;

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

  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = items.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      <BlogListControls
        viewMode={viewMode}
        onViewModeChange={(mode) => setViewMode(mode)}
      />
      {/* 列表内容 */}
      <div className={viewMode === "card" ? styles.cardGrid : styles.listGrid}>
        {paginatedItems.map((item: BlogItem, index) => {
          if (!("slug" in item)) return null;
          const href =
            "summary" in item
              ? `/posts/${item.slug}`
              : `/cozydiary/${item.slug}`;

          return viewMode === "card" ? (
            <Link key={item.slug} href={href} className={styles.link}>
              <div className={styles.cardItem}>
                {item.cover && (
                  <Image
                    src={item.cover}
                    alt={item.title}
                    width={600}
                    height={600}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className={styles.cardImage}
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                )}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDate}>{formatDate(item.date)}</p>
                </div>
              </div>
            </Link>
          ) : (
            <Link key={item.slug} href={href} className={styles.link}>
              <div className={styles.listItem}>
                <span className={styles.listTitle}>{item.title}</span>
                <span className={styles.listDate}>{formatDate(item.date)}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <BlogListPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
