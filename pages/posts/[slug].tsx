// /pages/posts/[slug].tsx
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import Header from "../../components/Header"; // 用 Header 组件
import { getAllPosts, getPostBySlug, Post } from "../../lib/posts";
import { tagMap } from "../../lib/tags";
import { formatDate } from "../../lib/date";
import remarkGfm from "remark-gfm";
import styles from "../../styles/MdContent.module.css";
import remarkBreaks from "remark-breaks";
import SEO from "../../components/SEO";

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <>
      <SEO
        title={`${post.title} - KuromiPiPi | KKuromiPiPi`}
        description={post.summary}
      />
      <div className="container">
        <Header
          buttons={[
            // { label: "HOME", href: "/" },
            { label: "POSTS", href: "/posts" },
            // { label: "COZYDIARY", href: "/cozydiary" },
            // { label: "MOMENTS", href: "/moments" },
            { label: "TAGS", href: "/tags" },
            // { label: "NOW", href: "/now" },
          ]}
        />
        {/* 文章内容 */}
        <main>
          {post.cover && (
            <img
              src={post.cover}
              alt={post.title}
              style={{
                width: "50%",
                // height: "250px",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "16px",
                marginBottom: "1rem",
              }}
            />
          )}

          <p
            style={{
              color: "var(--color-gray-400)",
              fontSize: "16px",
              marginBottom: "1rem",
            }}
          >
            {formatDate(post.date)}
          </p>
          <h1>{post.title}</h1>

          <div className={styles.mdContent}>
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags 区域 */}
          {post.tags && post.tags.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`}>
                    <span
                      style={{
                        padding: "0.25rem 0.5rem",
                        borderRadius: "5px",
                        // backgroundColor: "#f0f0f0",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        color: "#706F6C",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2rem", // 图标和文字间距
                      }}
                    >
                      <img
                        src="/icon/pound.svg"
                        alt="#"
                        style={{ width: "1em", height: "1em" }}
                      />{" "}
                      {tagMap[tag] || tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

// 动态生成路径
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

// 获取每条文章内容
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  return { props: { post } };
};
