import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  title: string; // 标题
  date: string; // 日期
  summary: string; // 摘要
  tags: string[]; // 标签
  cover?: string; // 封面可选
  slug: string; // 对应文件名，md里不需要写
  content: string; // Markdown，自动抓取md正文部分
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
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
        tags: data.tags,
        cover: data.cover || null,
        content,
      } as Post;
    });

  return posts;
}

// **新增** 获取单篇文章
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
