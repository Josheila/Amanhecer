// /pages/now.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/Header";
import { formatDate } from "../lib/date";
import SEO from "../components/SEO";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import styles from "../styles/MdContent.module.css";
import Image from "next/image";
import blogListStyles from "../styles/BlogList.module.css";
import ReactMarkdown from "react-markdown";
import { BLUR_DATA_URL } from "../lib/blur";

interface Post {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  cover?: string;
  content: string;
  slug: string;
}

interface NowPageProps {
  post: Post;
}

export default function NowPage({ post }: NowPageProps) {
  return (
    <>
      <SEO title="NOW - KuromiPiPi" />
      <div className="container">
        <Header
          buttons={[
            { label: "HOME", href: "/" },
            { label: "POSTS", href: "/posts" },
            { label: "COZYDIARY", href: "/cozydiary" },
            { label: "MOMENTS", href: "/moments" },
            // { label: "TAGS", href: "/tags" },
            { label: "NOW", href: "/now" },
          ]}
        />

        <main>
          {post.cover && (
            <div className={blogListStyles.coverWrapper}>
              <div className={blogListStyles.coverBox}>
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className={blogListStyles.coverImage}
                  priority
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </div>
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
        </main>
      </div>
    </>
  );
}

// 读取 posts/fix/now.md
export async function getStaticProps() {
  const nowPath = path.join(process.cwd(), "posts/fix/now.md");
  const fileContents = fs.readFileSync(nowPath, "utf8");
  const { data, content } = matter(fileContents);

  const post: Post = {
    slug: "now",
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags,
    cover: data.cover || null,
    content,
  };

  return {
    props: { post },
  };
}
