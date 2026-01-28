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
          { label: "HOME", href: "/" },
          { label: "POSTS", href: "/posts" },
          { label: "COZYDIARY", href: "/cozydiary" },
          { label: "MOMENTS", href: "/moments" },
          // { label: "TAGS", href: "/tags" },
          { label: "NOW", href: "/now" },
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
