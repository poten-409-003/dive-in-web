"use client";

import SquareOutUpIcon from "@/components/icons/SquareOutUp";
import toast from "react-hot-toast";

const ShareButton = () => {
  return (
    <button
      className="flex p-3"
      onClick={() => {
        navigator.clipboard
          .writeText(window.location.href)
          .then(() => {
            toast.success("URL이 복사되었습니다.", {
              style: {
                fontSize: "14px",
                fontWeight: "500",
              },
            });
          })
          .catch(() => {
            toast.error("URL 복사에 실패했습니다.");
          });
      }}
    >
      <SquareOutUpIcon className="w-6 h-6 text-gray-900" />
    </button>
  );
};

export default ShareButton;
