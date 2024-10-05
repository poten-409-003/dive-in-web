"use client";

import { revalidateTagAction } from "@/actions/revalidate";
import { useRouter } from "next/navigation";

const DeleteUserButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center justify-center p-3 h-10 text-body_sm text-gray-500"
      onClick={async () => {
        await fetch("/api/auth/user", {
          method: "DELETE",
        });
        revalidateTagAction("user");
        router.replace("/");
      }}
    >
      회원 탈퇴
    </button>
  );
};

export default DeleteUserButton;
