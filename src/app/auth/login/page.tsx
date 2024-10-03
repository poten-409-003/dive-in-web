"use client";

import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type Props = {
  searchParams: Record<string, string>;
};

const LoginPage = ({ searchParams }: Props) => {
  const next = searchParams.next ?? "/";
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <button
          className="h-14 flex items-center rounded-lg border pl-6 pr-4 bg-slate-50 hover:bg-slate-100"
          onClick={async () => {
            const supabase = createClient();
            const { data } = await supabase.auth.signInWithOAuth({
              provider: "kakao",
              options: {
                redirectTo: `${window.location.origin}/auth/callback?next=${next}`,
              },
            });

            if (data.url) {
              router.replace(data.url);
            }
          }}
        >
          <span className="flex-1 text-left font-bold">
            카카오 아이디로 로그인
          </span>
          <ArrowRightIcon className="w-4 h-4 text-slate-700" />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
