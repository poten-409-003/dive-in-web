/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "http",
        hostname: "k.kakaocdn.net",
      },
      {
        hostname: "kr.object.ncloudstorage.com",
      },
    ],
  },
};

export default nextConfig;
