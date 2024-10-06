"use client";

import { revalidateTagAction } from "@/actions/revalidate";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteUserButton = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center justify-center p-3 h-10 text-body_sm text-gray-500"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        회원 탈퇴
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/70" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg w-full space-y-4 bg-white flex flex-col rounded-2xl overflow-hidden">
            <div className="flex flex-col gap-2 px-4 pt-5">
              <DialogTitle className="font-bold text-body_lb">
                회원 탈퇴
              </DialogTitle>
              <Description className="text-body_br text-gray-600">
                정말 탈퇴하시겠어요?
              </Description>
            </div>
            <div className="flex gap-2 px-4 pb-5">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 flex items-center justify-center h-12 bg-gray-200 rounded-lg text-body_sm text-gray-800"
              >
                취소
              </button>
              <button
                onClick={async () => {
                  await fetch("/api/auth/user", {
                    method: "DELETE",
                  });
                  revalidateTagAction("user");
                  router.replace("/");
                }}
                className="flex-1 flex items-center justify-center h-12 bg-primary rounded-lg text-body_sm text-primary-foreground"
              >
                탈퇴
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteUserButton;
