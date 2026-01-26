// pages/_app.tsx
import "../styles/globals.css";
import ScrollToTop from "../components/ScrollToTop";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  );
}
