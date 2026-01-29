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

export interface DiaryMeta {
  title: string;
  date: string;
  cover?: string;
  slug: string;
}

// 👉 cozydiary 目录
const diaryDirectory = path.join(process.cwd(), "cozydiary");
let diariesCache: Diary[] | null = null;
let diariesMetaCache: DiaryMeta[] | null = null;
const diaryBySlugCache = new Map<string, Diary>();

// 获取所有 diary 元数据（不读 content）
export function getAllDiariesMeta(): DiaryMeta[] {
  if (diariesMetaCache) {
    return [...diariesMetaCache];
  }

  const filenames = fs.readdirSync(diaryDirectory);

  const diaries: DiaryMeta[] = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(diaryDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        cover: data.cover || null,
      };
    });

  diaries.sort((a, b) => (a.date < b.date ? 1 : -1));

  diariesMetaCache = diaries;
  return diaries;
}

// 获取所有 diary
export function getAllDiaries(): Diary[] {
  if (diariesCache) {
    return [...diariesCache];
  }

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

  diariesCache = diaries;
  return diaries;
}

// 单篇 diary
export function getDiaryBySlug(slug: string): Diary | null {
  if (diaryBySlugCache.has(slug)) {
    return diaryBySlugCache.get(slug) || null;
  }

  const filePath = path.join(diaryDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const diary = {
    slug,
    title: data.title,
    date: data.date,
    cover: data.cover || null,
    content,
  };

  diaryBySlugCache.set(slug, diary);
  return diary;
}
