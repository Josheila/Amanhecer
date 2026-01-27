// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ScrollToTop from "../components/ScrollToTop";
import CopyRight from "../components/CopyRight";
import styles from "../styles/Layout.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      {/* 页面主体 */}
      <main className={styles.main}>
        <Component {...pageProps} />
        <ScrollToTop />
      </main>

      {/* 全局页脚 */}
      <CopyRight />
    </div>
  );
}
