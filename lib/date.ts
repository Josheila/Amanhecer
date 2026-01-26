// /lib/date.ts
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // Jan, Feb, Mar...
    day: "numeric",
  });
}
