"use client";

import {usePathname} from "next/navigation";
import BottomNav from "./_components/BottomNav";

export default function BottomNavWrapper() {
  const pathname = usePathname();
  const hideBottomNav = ["/community/create-post"]; //숨길경로

  if(hideBottomNav.includes(pathname)){
    return null;
  }

  return <BottomNav />;
}