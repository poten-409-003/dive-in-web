"use client";

import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Image from "next/image";
import Link from "next/link";

type Props = {
  user: {
    id: number;
    email: string;
    role: string;
    profileImageUrl: string;
    nickname: string;
    socialType: string;
  };
};

const UserProfile = ({ user }: Props) => {
  return (
    <Link
      href="/mypage/profile"
      className="flex items-center gap-4 h-[88px] p-4 bg-gray-100 text-gray-900 rounded-lg"
    >
      <Image
        alt={`${user.nickname}님의 프로필 이미지`}
        src={user.profileImageUrl}
        width={56}
        height={56}
        className="w-14 h-14 rounded-full object-cover"
        priority
      />

      <div className="flex-1 flex flex-col gap-1">
        <span className="text-body_lb">{user.nickname}</span>
        <span className="text-body_sr text-gray-600">{user.email}</span>
      </div>

      <ArrowRightIcon className="w-6 h-6" />
    </Link>
  );
};

export default UserProfile;
