import { GetStaticProps } from "next";
import Header from "../components/Header";
import AvatarSection from "../components/AvatarSection";
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
          { label: "HOME", href: "/" },
          { label: "POSTS", href: "/posts" },
          { label: "COZYDIARY", href: "/cozydiary" },
          { label: "MOMENTS", href: "/moments" },
          // { label: "TAGS", href: "/tags" },
          { label: "NOW", href: "/now" },
        ]}
      />
    </div>
  );
}
