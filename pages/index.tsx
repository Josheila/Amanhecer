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
      <AvatarSection />
      <Header style={{ justifyContent: "center" }} />
    </div>
  );
}
