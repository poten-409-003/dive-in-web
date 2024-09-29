"use client";
import { Home, LogIn, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();

  const isLessons = pathname === "/";
  const isPools = pathname === "/pools";
  const isLogin = pathname === "/login";

  return (
    <nav className="flex-none flex justify-around items-center h-12 bg-white border-t border-slate-200">
      <Link
        href="/"
        className="h-full flex flex-col gap-0.5 items-center justify-center"
      >
        <Home
          className={`h-5 w-5 ${
            isLessons ? "text-blue-400" : "text-slate-500"
          }`}
        />
        <span className="text-xs">강습</span>
      </Link>
      <Link
        href="/pools"
        className="h-full flex flex-col gap-0.5 items-center justify-center"
      >
        <MapPin
          className={`h-5 w-5 ${isPools ? "text-blue-400" : "text-slate-500"}`}
        />
        <span className="text-xs">수영장</span>
      </Link>
      <Link
        href="/login"
        className="h-full flex flex-col gap-0.5 items-center justify-center"
      >
        <LogIn
          className={`h-5 w-5 ${isLogin ? "text-blue-400" : "text-slate-500"}`}
        />
        <span className="text-xs">로그인</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
