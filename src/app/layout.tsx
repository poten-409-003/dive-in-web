import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BottomNav from "./_components/BottomNav";

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
  description: "수영에 빠져 빠져 빠져!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
        // babo
      >
        <main className="flex-1 overflow-y-auto">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
