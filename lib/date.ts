// /lib/date.ts
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear() % 100; // 取年份后两位
  const month = date.toLocaleString("en-US", { month: "short" }); // Jan, Feb...
  const day = date.getDate();
  return `${month} ${day}, ${year.toString().padStart(2, "0")}`;
}
