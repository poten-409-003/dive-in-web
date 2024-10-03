"use client";

import Image from "next/image";

type Props = {
  avatar: string;
  name: string;
};

const InstructorProfile = ({ avatar, name }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatar}
        alt={`${name} 프로필`}
        width={24}
        height={24}
        className="flex-none w-6 h-6 rounded-full"
      />
      <p className="text-body_sr text-gray-600">{name}</p>
    </div>
  );
};

export default InstructorProfile;
