// /pages/tags.tsx
import Link from "next/link";
import Header from "../components/Header";
import { getAllPosts, Post } from "../lib/posts";
import { tagMap } from "../lib/tags";

interface TagsPageProps {
  tags: { name: string; count: number }[];
}

export default function Tags({ tags }: TagsPageProps) {
  // 按热度排序
  const sortedTags = [...tags].sort((a, b) => b.count - a.count);

  const maxCount = sortedTags[0]?.count || 1;

  return (
    <div className="container">
      <Header buttons={[{ label: "Posts", href: "/posts" }]} />

      <main style={{ marginTop: "2rem" }}>
        <h1>All Tags</h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "1rem",
            backgroundImage: "url('/images/tags-heatmap.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            padding: "1rem",
            minHeight: "400px",
          }}
        >
          {sortedTags.map((tag) => {
            const fontSize = 0.8 + (tag.count / maxCount) * 1.5; // 0.8rem ~ 2.3rem

            return (
              <Link key={tag.name} href={`/tags/${tag.name}`}>
                <div
                  style={{
                    cursor: "pointer",
                    fontSize: `${fontSize}rem`,
                    fontWeight: 500,
                    transition: "background-color 0.2s, transform 0.2s",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(220,220,220,0.8)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.7)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  #{tagMap[tag.name] || tag.name}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
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
