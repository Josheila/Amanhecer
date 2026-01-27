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
          { label: "Home", href: "/" },
          { label: "Posts", href: "/posts" },
          // { label: "CozyDiary", href: "/cozydiary" },
          { label: "Moments", href: "/moments" },
          // { label: "Tags", href: "/tags" },
          { label: "Now", href: "/now" },
          { label: "About", href: "/about" },
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
