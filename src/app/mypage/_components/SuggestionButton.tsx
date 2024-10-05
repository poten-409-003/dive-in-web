"use client";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";

const SuggestionButton = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100">
        다이브인에 제안하기
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <h3 className="text-left text-body_bb">다이브인에 제안하기</h3>
        </DrawerHeader>
        <DrawerFooter className="px-4 pt-0 pb-6">
          <Link href="/" className="flex items-center gap-2 py-3 rounded-lg">
            <Image
              alt="카카오톡 로고"
              src="/icon/kakao_2.png"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-body_bm text-gray-900">
              카카오톡 채널에서 제안하기
            </span>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SuggestionButton;
