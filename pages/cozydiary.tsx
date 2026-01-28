import { GetStaticProps } from "next";
import Header from "../components/Header";
import AvatarSection from "../components/AvatarSection";
import BlogList from "../components/BlogList";
import { getAllDiaries, Diary } from "../lib/diary";

interface CozyDiaryProps {
  diaries: Diary[];
}

export default function CozyDiary({ diaries }: CozyDiaryProps) {
  return (
    <div className="container">
      <Header
        // style={{ justifyContent: "center" }}
        buttons={[
          { label: "HOME", href: "/" },
          { label: "POSTS", href: "/posts" },
          { label: "COZYDIARY", href: "/cozydiary" },
          { label: "MOMENTS", href: "/moments" },
          // { label: "TAGS", href: "/tags" },
          { label: "NOW", href: "/now" },
        ]}
      />
      <AvatarSection />
      <BlogList items={diaries} pageSize={9} defaultView="list" />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const diaries = getAllDiaries(); // 自动读取 CozyDiary 目录下所有 Markdown 文件

  return {
    props: {
      diaries,
    },
  };
};
