// pages/tags/[tag].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, Post } from "../../lib/posts";
import PostList from "../../components/PostList";
import Header from "../../components/Header";
import { tagMap } from "../../lib/tags";

interface TagPageProps {
  tag: string;
  posts: Post[];
}

export default function TagPage({ tag, posts }: TagPageProps) {
  return (
    <div className="container" style={{ maxWidth: "640px", margin: "0 auto" }}>
      <Header buttons={[{ label: "Posts", href: "/posts" }]} />
      <main style={{ marginTop: "2rem" }}>
        <h1>Tag: {tagMap[tag] || tag}</h1>
        <PostList posts={posts} />
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  const paths = tags.map((tag) => ({ params: { tag } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string;
  //   直接调用 getAllPosts(tag) 获取某个 tag 的文章
  const posts = getAllPosts(tag);

  return {
    props: { tag, posts },
  };
};
