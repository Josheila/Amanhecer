import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getAllDiaries, getDiaryBySlug, Diary } from "../../lib/diary";
import { formatDate } from "../../lib/date";
import Header from "../../components/Header"; // 用 Header 组件
import styles from "../../styles/MdContent.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import SEO from "../../components/SEO";

interface DiaryPageProps {
  diary: Diary | null;
}

export default function DiaryPage({ diary }: DiaryPageProps) {
  const router = useRouter();

  // fallback 时显示加载
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!diary) {
    return <div>Diary not found</div>;
  }

  return (
    <>
      <SEO title={`${diary.title} - KuromiPiPi | KKuromiPiPi`} />
      <div className="container" style={{ padding: "1rem" }}>
        <Header
          buttons={[
            // { label: "HOME", href: "/" },
            // { label: "POSTS", href: "/posts" },
            { label: "COZYDIARY", href: "/cozydiary" },
            // { label: "MOMENTS", href: "/moments" },
            // { label: "TAGS", href: "/tags" },
            // { label: "NOW", href: "/now" },
          ]}
        />
        {diary.cover && (
          <div style={{ marginBottom: "1rem" }}>
            <img
              src={diary.cover}
              alt={diary.title}
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                width: "50%",
                // height: "250px",
                aspectRatio: "1 / 1",
                borderRadius: "16px",
                marginBottom: "1rem",
              }}
            />
          </div>
        )}

        <p style={{ color: "var(--color-gray-400)", marginBottom: "1rem" }}>
          {formatDate(diary.date)}
        </p>
        <h1 style={{ fontSize: "1.7rem", marginBottom: "2rem" }}>
          {diary.title}
        </h1>
        <div className={styles.mdContent}>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {diary.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}

// 静态生成所有路径
export const getStaticPaths: GetStaticPaths = async () => {
  const diaries = getAllDiaries(); // 读取 CozyDiary 文件夹所有日记
  const paths = diaries.map((d) => ({
    params: { diary: d.slug },
  }));

  return {
    paths,
    fallback: false, // 不存在的返回 404
  };
};

// 静态生成单篇日记
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.diary as string;
  const diary = getDiaryBySlug(slug);

  return {
    props: {
      diary,
    },
  };
};
