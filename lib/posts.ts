// /lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  cover?: string;
  slug: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

// 获取所有 posts，可选按 tag 过滤
export function getAllPosts(tag?: string): Post[] {
  const filenames = fs.readdirSync(postsDirectory);

  let posts: Post[] = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        summary: data.summary,
        tags: data.tags || [],
        cover: data.cover || null,
        content,
      };
    });

  if (tag) {
    posts = posts.filter((post) => post.tags.includes(tag));
  }

  // 👉 建议顺手按时间排一下
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

// 单篇
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags || [],
    cover: data.cover || null,
    content,
  } as Post;
}
