// components/CopyRight.tsx
import React from "react";
import styles from "../styles/CopyRight.module.css";

export default function CopyRight() {
  return (
    <footer className={styles.copyright}>
      &copy; <span itemProp="copyrightYear">{new Date().getFullYear()}</span>
      <span className={styles.withLove}>🐾</span>
      <span className={styles.author} itemProp="copyrightHolder">
        Sheila
      </span>
    </footer>
  );
}
