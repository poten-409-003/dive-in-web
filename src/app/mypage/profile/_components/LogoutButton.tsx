"use client";

import { revalidateTagAction } from "@/actions/revalidate";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center justify-center p-3 h-10 text-body_sm text-gray-500"
      onClick={async () => {
        await fetch("/api/auth/logout", {
          method: "POST",
        });

        revalidateTagAction("user");

        router.push("/");
      }}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
