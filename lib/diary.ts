// /lib/diary.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Diary {
  title: string;
  date: string;
  cover?: string;
  slug: string;
  content: string;
}

// 👉 cozydiary 目录
const diaryDirectory = path.join(process.cwd(), "cozydiary");

// 获取所有 diary
export function getAllDiaries(): Diary[] {
  const filenames = fs.readdirSync(diaryDirectory);

  const diaries: Diary[] = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(diaryDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        cover: data.cover || null,
        content,
      };
    });

  // 👉 按时间倒序
  diaries.sort((a, b) => (a.date < b.date ? 1 : -1));

  return diaries;
}

// 单篇 diary
export function getDiaryBySlug(slug: string): Diary | null {
  const filePath = path.join(diaryDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    cover: data.cover || null,
    content,
  };
}
