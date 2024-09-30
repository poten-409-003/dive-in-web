import type { Metadata } from "next";
import localFont from "next/font/local";
import BottomNav from "./_components/BottomNav";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY!;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dive In",
  description:
    "수영 강습 찾기 어렵다고요? Dive In에서 쉽고 빠르게 원하는 강습을 찾아보세요! 초보부터 고수까지, 다양한 강습이 준비되어 있습니다. Dive In, 지금 바로 시작해보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-dvh`}
        // babo
      >
        <main className="flex-1 overflow-y-auto no-scrollbar">{children}</main>
        <BottomNav />
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
