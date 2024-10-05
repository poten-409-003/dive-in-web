import { getUser } from "@/actions/user";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";
import UserProfile from "./_components/UserProfile";
import ClassManageSection from "./_components/ClassManageSection";
import SuggestionButton from "./_components/SuggestionButton";

const MyPage = async () => {
  const user = await getUser();

  const isLogin = !!user;

  return (
    <div className="flex flex-col">
      <div className="flex pt-10 px-4 pb-5">
        <h1 className="text-heading_2">마이 페이지</h1>
      </div>
      <div className="px-4 pb-4">
        {!isLogin && (
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
        {isLogin && <UserProfile user={user} />}
      </div>

      <div className="flex flex-col gap-4 pb-10">
        <ClassManageSection isLogin={isLogin} />

        <Divider />

        <div className="flex flex-col">
          <div className="flex p-4">
            <h2 className="text-body_bb text-gray-600">이용안내</h2>
          </div>
          <Link
            href="/notice"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
          >
            <span>공지사항 및 이벤트</span>
          </Link>
          <Link
            href="https://pumped-nectarine-f16.notion.site/FAQ-114b214c431780e39b14da75a4967289?pvs=4"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
            target="_blank"
          >
            <span>FAQ</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <SuggestionButton />
        </div>

        <Divider />

        <div className="flex flex-col">
          <div className="flex p-4">
            <h2 className="text-body_bb text-gray-600">약관 및 정책</h2>
          </div>
          <Link
            href="https://pumped-nectarine-f16.notion.site/114b214c431780ff833dc6c281646b9b?pvs=4"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
            target="_blank"
          >
            <span>서비스 이용 약관</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="http://pumped-nectarine-f16.notion.site"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
            target="_blank"
          >
            <span>위치 정보 서비스 약관</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="https://pumped-nectarine-f16.notion.site/114b214c431780a99c94dfc758221271?pvs=4"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
            target="_blank"
          >
            <span>개인정보처리방침</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="https://pumped-nectarine-f16.notion.site/114b214c4317805eb96bc3ce88b85cc9?pvs=4"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
            target="_blank"
          >
            <span>마케팅정보 수신 동의</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
          <Link
            href="https://pumped-nectarine-f16.notion.site/114b214c431780f0a630dbbdc3302964?pvs=4"
            className="flex p-4 text-body_br text-gray-600 hover:bg-gray-100"
            target="_blank"
          >
            <span>오픈소스 라이센스</span>
            <SquareArrowOutUpRightIcon className="w-5 h-5 ml-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="h-px bg-gray-200" />;
};

export default MyPage;
