import { GetStaticProps } from "next";
import Header from "../components/Header";
import AvatarSection from "../components/AvatarSection";
import BlogList from "../components/BlogList"; // ✅ 改成 BlogList
import { getAllPosts, Post } from "../lib/posts";

interface PostsPageProps {
  posts: Post[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div className="container">
      <Header
        // style={{ justifyContent: "center" }}
        buttons={[
          { label: "Home", href: "/" },
          // { label: "Posts", href: "/posts" },
          { label: "CozyDiary", href: "/cozydiary" },
          { label: "Moments", href: "/moments" },
          // { label: "Tags", href: "/tags" },
          { label: "Now", href: "/now" },
          { label: "About", href: "/about" },
        ]}
      />
      <AvatarSection />
      {/* 默认卡片视图，所以不传 defaultView */}
      <BlogList items={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(); // 读取 posts 目录下所有 Markdown 文件

  return {
    props: {
      posts,
    },
  };
};
