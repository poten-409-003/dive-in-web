"use client";
import ChatIcon from "@/components/icons/ChatIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import PoolIcon from "@/components/icons/PoolIcon";
import SwimHatIcon from "@/components/icons/SwimHatIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = {
  home: "/lessons",
  pools: "/pools",
  login: "/auth/login",
};

const BottomNav = () => {
  const pathname = usePathname();

  const isLessons = pathname.startsWith(routes.home);
  const isPools = pathname.startsWith(routes.pools);
  const isLogin = pathname.startsWith(routes.login);

  return (
    <nav className="flex-none flex items-center py-3 px-4 bg-gray-100 border-t border-slate-200">
      <Link
        href={routes.home}
        className={`flex-1 h-full flex flex-col gap-1 items-center justify-center ${
          isLessons ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <SwimHatIcon className={`h-6 w-6`} />
        <span className={`text-sm`}>수영클래스</span>
      </Link>
      <Link
        href={routes.pools}
        className={`flex-1 h-full flex flex-col gap-1 items-center justify-center ${
          isPools ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <PoolIcon className={`h-6 w-6`} />
        <span className="text-sm">수영장</span>
      </Link>
      <Link
        href={routes.pools}
        className={`flex-1 h-full flex flex-col gap-1 items-center justify-center ${
          isPools ? "text-gray-900" : "text-gray-500 stroke-current"
        }`}
      >
        <ChatIcon className={`h-6 w-6`} />
        <span className="text-sm">소통해요</span>
      </Link>
      <Link
        href={routes.login}
        className={`flex-1 h-full flex flex-col gap-1 items-center justify-center ${
          isLogin ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <PersonIcon className={`h-6 w-6`} />
        <span className="text-sm">마이</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
