import { GetStaticProps } from "next";
import Header from "../components/Header";
import AvatarSection from "../components/AvatarSection";
import PostList from "../components/PostList";
import { getAllPosts, Post } from "../lib/posts";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className="container">
      <Header />
      <AvatarSection />
      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(); // 自动读取 posts 目录下所有 Markdown 文件

  return {
    props: {
      posts,
    },
  };
};
