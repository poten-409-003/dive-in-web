import CloudOffIcon from "@/components/icons/CloudOffIcon";
import RefreshButton from "./_components/not-found/refreshButton";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-full flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <CloudOffIcon className="w-10 h-10 text-gray-500" />
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-5xl font-black text-primary-sub">404</h1>
          <p className="text-lg text-gray-600">
            잠시 연결이 불안정합니다
            <br />
            인터넷 연결 확인 후 다시 시도해주세요
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <RefreshButton />
        <Link
          href="/"
          className="flex items-center justify-center h-12 bg-gray-200 px-4 rounded-lg text-body_sm text-gray-800"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
