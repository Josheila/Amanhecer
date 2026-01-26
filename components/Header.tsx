import Link from "next/link";
import styles from "../styles/Header.module.css";

interface HeaderProps {
  buttons?: { label: string; href: string }[];
  style?: React.CSSProperties; // ✅ 允许外部传 style
  className?: string; // 可选 className 支持
}

export default function Header({
  buttons = [
    { label: "Home", href: "/" },
    { label: "Posts", href: "/posts" },
    { label: "Tags", href: "/tags" },
    { label: "Now", href: "/now" },
    { label: "About", href: "/about" },
  ],
  style,
}: HeaderProps) {
  return (
    <header className={styles.header} style={style}>
      <nav className={styles.navButtons}>
        {buttons.map((btn) => (
          <Link key={btn.href} href={btn.href}>
            <button className={styles.navButton}>{btn.label}</button>
          </Link>
        ))}
      </nav>
    </header>
  );
}
