// /pages/tags/[tag].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import PostList from "../../components/PostList";
import { getAllPosts, Post } from "../../lib/posts";
import { tagMap } from "../../lib/tags";

interface TagPageProps {
  tag: string;
  posts: Post[];
}

export default function TagPage({ tag, posts }: TagPageProps) {
  return (
    <div className="container">
      <Header buttons={[{ label: "Posts", href: "/posts" }]} />
      <main style={{ marginTop: "2rem" }}>
        <h1># {tagMap[tag] || tag}</h1>
        <PostList posts={posts} />
      </main>
    </div>
  );
}

// 动态生成所有 tag 页面
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((t) => tagsSet.add(t)));
  const paths = Array.from(tagsSet).map((tag) => ({
    params: { tag },
  }));
  return { paths, fallback: false };
};

// 获取当前 tag 对应的所有文章
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string;
  const posts = getAllPosts().filter((post) => post.tags.includes(tag));

  return {
    props: {
      tag,
      posts,
    },
  };
};
