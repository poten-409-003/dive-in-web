"use client";

import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<Record<string, unknown> | null>(null);

  const isLoggedId = !!user;

  useEffect(() => {
    // const url = "/api/me";
    const url = "https://api.dive-in.co.kr/me";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Failed to fetch user", error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex pt-10 px-4 pb-5">
        <h1 className="text-heading_2">마이 페이지</h1>
      </div>
      <div className="px-4 pb-4">
        {!isLoggedId && (
          <Link
            href="/auth/login"
            className="flex items-center h-[88px] p-4 bg-primary text-primary-foreground rounded-lg"
          >
            <div className="flex items-center gap-2">
              <ChatIcon className="w-6 h-6 text-[#FEE500]" />
              <span className="text-body_lb">로그인 해주세요</span>
            </div>

            <ArrowRightIcon className="w-6 h-6 ml-auto" />
          </Link>
        )}
        {isLoggedId && (
          <div>
            <p>내 정보를 가져왔습니다!</p>
            <code>{JSON.stringify(user)}</code>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 pb-10">
        <div className="flex flex-col">
          <div className="flex p-4">
            <h2 className="text-body_bb text-gray-600">클래스 관리</h2>
          </div>
          <div className="flex flex-col px-4">
            <button className="flex items-center justify-center h-12 bg-primary text-primary-foreground rounded-lg">
              <span className="text-body_sm">클래스 등록하기</span>
            </button>
          </div>
        </div>

        <Divider />

        <div className="flex flex-col">
          <div className="flex p-4">
            <h2 className="text-body_bb text-gray-600">이용안내</h2>
          </div>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>공지사항 및 이벤트</span>
          </Link>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>FAQ</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>다이브인에 제안하기</span>
          </Link>
        </div>

        <Divider />

        <div className="flex flex-col">
          <div className="flex p-4">
            <h2 className="text-body_bb text-gray-600">약관 및 정책</h2>
          </div>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>회원 정책</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>서비스 이용 약관</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>위치 정보 서비스 약관</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>개인정보처리방침</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>커뮤니티 운영정책</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="/"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>오픈소스 라이센스</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
        </div>
        <button
          className="text-body_sb"
          onClick={() => {
            fetch("/api/auth/logout", {
              method: "POST",
              credentials: "include",
            }).then(() => {
              setUser(null);
              router.replace("/");
            });
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="h-px bg-gray-200" />;
};

export default MyPage;
