"use client";

import { revalidateTagAction } from "@/actions/revalidate";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const DeleteUserButton = () => {
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center p-3 h-10 text-body_sm text-gray-500">
        회원 탈퇴
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left text-body_lb text-gray-900">
            회원 탈퇴
          </DialogTitle>
          <DialogDescription>정말 탈퇴하시겠어요?</DialogDescription>
        </DialogHeader>

        <div className="flex gap-2">
          <DialogClose asChild>
            <button className="flex-1 flex items-center justify-center h-12 bg-gray-200 rounded-lg text-body_sm text-gray-800">
              취소
            </button>
          </DialogClose>

          <button
            className="flex-1 flex items-center justify-center h-12 bg-primary rounded-lg text-body_sm text-primary-foreground"
            onClick={async () => {
              await fetch("/api/auth/user", {
                method: "DELETE",
              });
              revalidateTagAction("user");
              router.replace("/");
            }}
          >
            탈퇴
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );

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
