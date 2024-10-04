"use client";

import { useRouter } from "next/navigation";

const RefreshButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center justify-center h-12 bg-gray-200 px-4 rounded-lg text-body_sm text-gray-800"
      onClick={router.refresh}
    >
      새로고침
    </button>
  );
};

export default RefreshButton;
