// components/Layout.tsx
import React, { ReactNode } from "react";
import CopyRight from "./CopyRight";
import styles from "../styles/Layout.module.css";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <CopyRight />
    </div>
  );
}
