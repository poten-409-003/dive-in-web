"use client";
import ChatIcon from "@/components/icons/ChatIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import PoolIcon from "@/components/icons/PoolIcon";
import SwimHatIcon from "@/components/icons/SwimHatIcon";
import { GoHome } from "react-icons/go";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = {
  home: "/",
  lessons: "/lessons",
  pools: "/pools",
  // community: "/community/posts/list",
  community: "/community/posts/list?category=none&page=0",
  mypage: "/mypage",
  login: "/auth/login",
};

const BottomNav = () => {
  const pathname = usePathname();
  // const searchParams = useSearchParams();

  const isHome = pathname.startsWith(routes.home);
  const isLessons = pathname.startsWith(routes.lessons);
  const isPools = pathname.startsWith(routes.pools);
  const isCommunity = pathname.startsWith(routes.community);
  // const isCommunity = pathname.startsWith(routes.community) && searchParams.get("category") === "none";
  const isMypage = pathname.startsWith(routes.mypage);
  const isLogin = pathname.startsWith(routes.login);

  if (isLogin) {
    return null;
  }

  return (
    <nav className="flex-none h-14 flex items-center px-4 bg-gray-100 border-t border-slate-200">
      <Link
        href={routes.home}
        className={`flex-1 h-full flex flex-col gap-0.5 items-center justify-center ${
          isHome ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <GoHome className={`h-6 w-6`} />
        <span className={`text-label_sb`}>홈</span>
      </Link>
      <Link
        href={routes.lessons}
        className={`flex-1 h-full flex flex-col gap-0.5 items-center justify-center ${
          isLessons ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <SwimHatIcon className={`h-6 w-6`} />
        <span className={`text-label_sb`}>수영클래스</span>
      </Link>
      <Link
        href={routes.pools}
        className={`flex-1 h-full flex flex-col gap-0.5 items-center justify-center ${
          isPools ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <PoolIcon className={`h-6 w-6`} />
        <span className="text-label_sb">수영장</span>
      </Link>
      <Link
        // href={`${routes.community}?category=none&page=0`}
        href={routes.community}
        className={`flex-1 h-full flex flex-col gap-0.5 items-center justify-center ${
          isCommunity ? "text-gray-900" : "text-gray-500 stroke-current"
        }`}
      >
        <ChatIcon className={`h-6 w-6`} />
        <span className="text-label_sb">소통해요</span>
      </Link>

      <Link
        href={routes.mypage}
        className={`flex-1 h-full flex flex-col gap-0.5 items-center justify-center ${
          isMypage ? "text-gray-900" : "text-gray-500"
        }`}
      >
        <PersonIcon className={`h-6 w-6`} />
        <span className="text-label_sb">마이</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
