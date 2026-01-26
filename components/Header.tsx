import Link from "next/link";
import styles from "../styles/Header.module.css";

interface HeaderProps {
  buttons?: { label: string; href: string }[];
}

export default function Header({
  buttons = [
    { label: "Posts", href: "/posts" },
    { label: "Tags", href: "/tags" },
    { label: "Now", href: "/now" },
    { label: "About", href: "/about" },
  ],
}: HeaderProps) {
  return (
    <header className={styles.header}>
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
