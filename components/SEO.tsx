import Head from "next/head";

interface SEOProps {
  title?: string; // 页面标题
  description?: string; // 页面描述
}

export default function SEO({ title, description }: SEOProps) {
  const defaultTitle = "KuromiPiPi";
  const defaultDescription = "";

  return (
    <Head>
      {/* 页面标题 */}
      <title>{title || defaultTitle}</title>

      {/* 页面描述 */}
      <meta name="description" content={description || defaultDescription} />

      {/* favicon，亮暗模式都支持 */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        href="/favicon-dark.ico"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
  );
}
