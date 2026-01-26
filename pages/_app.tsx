// pages/_app.tsx
import "../styles/globals.css";
import ScrollToTop from "../components/ScrollToTop";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KuromiPiPi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
      <ScrollToTop />
    </>
  );
}
