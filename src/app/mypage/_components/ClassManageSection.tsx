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
import toast from "react-hot-toast";

type Props = {
  isLogin: boolean;
};

const ClassManageSection = ({ isLogin }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex p-4">
        <h2 className="text-body_bb text-gray-600">클래스 관리</h2>
      </div>
      <div className="flex flex-col px-4">
        {isLogin && (
          <Drawer>
            <DrawerTrigger className="flex items-center justify-center h-12 bg-primary text-primary-foreground rounded-lg">
              클래스 등록하기
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <h3 className="text-left text-body_bb">클래스 등록하기</h3>
              </DrawerHeader>
              <DrawerFooter className="px-4 pt-0 pb-6">
                <Link
                  href="http://pf.kakao.com/_DSqZn"
                  className="flex items-center gap-2 py-3 rounded-lg"
                  target="_blank"
                >
                  <Image
                    alt="카카오톡 로고"
                    src="/icon/kakao_2.png"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-body_bm text-gray-900">
                    카카오톡 채널에서 등록하기
                  </span>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
        {!isLogin && (
          <button
            className="flex items-center justify-center h-12 bg-gray-100 text-gray-400 rounded-lg"
            onClick={() => {
              toast("로그인 후 이용할 수 있습니다");
            }}
          >
            <span className="text-body_sm">클래스 등록하기</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ClassManageSection;
