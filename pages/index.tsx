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
      <Header
        style={{ justifyContent: "center" }}
        buttons={[
          { label: "Posts", href: "/posts" },
          { label: "Tags", href: "/tags" },
          { label: "Now", href: "/now" },
          { label: "About", href: "/about" },
        ]}
      />
    </div>
  );
}
