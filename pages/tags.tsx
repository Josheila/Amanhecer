// /pages/tags.tsx
import Link from "next/link";
import Header from "../components/Header";
import { getAllPosts, Post } from "../lib/posts";
import { tagMap } from "../lib/tags";
import SEO from "../components/SEO";
import styles from "../styles/Tags.module.css";

interface TagsPageProps {
  tags: { name: string; count: number }[];
}

export default function Tags({ tags }: TagsPageProps) {
  // 按热度排序
  const sortedTags = [...tags].sort((a, b) => b.count - a.count);
  const maxCount = sortedTags[0]?.count || 1;

  return (
    <>
      <SEO title="TAGS - KuromiPiPi" />

      <div
        className="container"
        // style={{ maxWidth: "640px", margin: "0 auto" }}
      >
        <Header
          buttons={[
            // { label: "HOME", href: "/" },
            { label: "POSTS", href: "/posts" },
            // { label: "COZYDIARY", href: "/cozydiary" },
            // { label: "MOMENTS", href: "/moments" },
            // { label: "TAGS", href: "/tags" },
            // { label: "NOW", href: "/now" },
          ]}
        />

        <main className={styles.main}>
          <h1 className={styles.title}>Tags</h1>

          <div className={styles.tagCloud}>
            {sortedTags.map((tag) => {
              const fontSize = 0.8 + (tag.count / maxCount) * 1.5; // 0.8rem ~ 2.3rem

              return (
                <Link key={tag.name} href={`/tags/${tag.name}`}>
                  <div
                    className={styles.tagItem}
                    style={{ fontSize: `${fontSize}rem` }}
                  >
                    <img
                      src="/icon/pound.svg"
                      alt="#"
                      className={styles.icon}
                    />
                    {tagMap[tag.name] || tag.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

// 获取标签及权重
export async function getStaticProps() {
  const posts: Post[] = getAllPosts();

  const tagCountMap: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags.forEach((t) => {
      tagCountMap[t] = (tagCountMap[t] || 0) + 1;
    });
  });

  const tags = Object.entries(tagCountMap).map(([name, count]) => ({
    name,
    count,
  }));

  return {
    props: { tags },
  };
}
