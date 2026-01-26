// /components/PostCard.tsx
import Link from "next/link";
import { Post } from "../lib/posts";
import { formatDate } from "../lib/date";

interface PostCardProps {
  post: Post; // 单条文章数据
  view: "card" | "list"; // 当前视图模式，卡片或列表
}

export default function PostCard({ post, view }: PostCardProps) {
  return (
    // 点击整个卡片跳转到文章详情页
    <Link
      href={`/posts/${post.slug}`}
      style={{ textDecoration: "none", color: "inherit" }} // 去掉默认链接样式
    >
      {view === "card" ? (
        // ===== 卡片模式 =====
        <div
          style={{
            border: "1px solid var(--color-gray-200)", // 边框颜色使用全局变量
            borderRadius: "10px", // 圆角
            overflow: "hidden", // 避免子元素溢出
            cursor: "pointer", // 鼠标悬停显示手型
            display: "flex",
            flexDirection: "column",
          }}
        >
          {post.cover && (
            // 封面图部分
            <div
              style={{
                height: "120px",
                aspectRatio: "4 / 3", // 固定4:3比例
                overflow: "hidden",
              }}
            >
              <img
                src={post.cover}
                alt={post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 图片填充并裁剪
              />
            </div>
          )}
          {/* 卡片文字内容 */}
          <div style={{ padding: "0.5rem 1rem" }}>
            <h3
              style={{
                margin: "0 0 0.5rem 0",
                fontWeight: 400,
                fontSize: "1rem",
                color: "var(--color-gray-500)",
              }}
            >
              {post.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "var(--color-gray-400)", // 日期颜色
              }}
            >
              {formatDate(post.date)}
            </p>
          </div>
        </div>
      ) : (
        // ===== 列表模式 =====
        <div
          style={{
            borderBottom: "0.5px solid var(--color-gray-200)", // 列表分割线
            padding: "0.5rem 4px",
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "1fr auto", // 左边占满，右边自适应
            alignItems: "center", // 垂直居中
            justifyContent: "space-between", // 左右分布
          }}
        >
          {/* 标题 */}
          <span style={{ fontWeight: 400, color: "var(--color-gray-500)" }}>
            {post.title}
          </span>
          {/* 日期 */}
          <span style={{ fontSize: "0.9rem", color: "var(--color-gray-400)" }}>
            {formatDate(post.date)}
          </span>
        </div>
      )}
    </Link>
  );
}
