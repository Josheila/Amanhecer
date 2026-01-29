/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 告诉 Next.js 构建成静态输出
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
