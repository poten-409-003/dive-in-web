"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/lessons");
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <Image
        alt="로고"
        src="/image/logo_b.png"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
