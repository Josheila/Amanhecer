import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

interface HeaderProps {
  buttons?: { label: string; href: string }[];
  style?: React.CSSProperties;
  className?: string;
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
}: HeaderProps) {
  const router = useRouter();

  return (
    <header className={styles.header} style={style}>
      <nav className={styles.navButtons}>
        {buttons.map((btn) => {
          // 判断当前路由是否等于按钮 href
          const isSelected = router.pathname === btn.href;

          return (
            <Link key={btn.href} href={btn.href} passHref>
              <button
                className={`${styles.navButton} ${isSelected ? styles.selected : ""}`}
              >
                {btn.label}
              </button>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
