// /lib/date.ts
/**
 * 格式化日期
 * @param dateStr - 日期字符串
 * @param type - 格式类型：1 = Jan 24, 26 (默认), 2 = 20-01-02 23:44
 */
export function formatDate(dateStr: string, type: 1 | 2 = 1): string {
  const date = new Date(dateStr);

  const year = (date.getFullYear() % 100).toString().padStart(2, "0"); // 20
  const monthNum = (date.getMonth() + 1).toString().padStart(2, "0"); // 01
  const day = date.getDate().toString().padStart(2, "0"); // 02

  if (type === 2) {
    const hours = date.getHours().toString().padStart(2, "0"); // 23
    const minutes = date.getMinutes().toString().padStart(2, "0"); // 44
    return `${year}-${monthNum}-${day} ${hours}:${minutes}`;
  }

  // type === 1
  const monthText = date.toLocaleString("en-US", { month: "short" }); // Jan
  return `${monthText} ${day}, ${year}`;
}
