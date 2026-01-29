import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Header.module.css";

interface HeaderProps {
  buttons?: { label: string; href: string }[];
  style?: React.CSSProperties;
  defaultOpen?: boolean; // 是否默认展开
  hideToggle?: boolean; // 是否隐藏 ☰ 按钮
}

export default function Header({
  buttons = [
    { label: "HOME", href: "/" },
    { label: "POSTS", href: "/posts" },
    { label: "COZYDIARY", href: "/cozydiary" },
    { label: "MOMENTS", href: "/moments" },
    { label: "TAGS", href: "/tags" },
    { label: "NOW", href: "/now" },
  ],
  style,
  defaultOpen = false,
  hideToggle = false,
}: HeaderProps) {
  const router = useRouter();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <header className={styles.header} style={style}>
      {/* 顶部行 */}
      <div className={styles.topRow}>
        {!hideToggle && (
          <button
            className={styles.menuButton}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            💭
          </button>
        )}
      </div>

      {/* 菜单 */}
      {open && (
        <nav className={styles.menu}>
          {buttons.map((btn) => {
            const isSelected = router.pathname === btn.href;

            return (
              <Link key={btn.href} href={btn.href}>
                <button
                  className={`${styles.menuItem} ${
                    isSelected ? styles.selected : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {btn.label}
                </button>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
