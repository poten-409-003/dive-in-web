"use client";

import Image from "next/image";

type Props = {
  avatar: string | null;
  name: string;
  width?: number;
  height?: number;
};

const WriterProfile = ({ avatar, name, width = 24, height = 24 }: Props) => {
  const profileImage = avatar || "/empty/academy_profile.png";

  return (  
    <div className="flex-none flex items-center gap-2">
      <Image
        src={profileImage}
        alt={`${name} 프로필`}
        width={width}
        height={height}
        style={{ width: `${width}px`, height: `${height}px` }} 
        className="flex-none w-6 h-6 rounded-full border border-gray-200"
      />
      <p className="text-body_sr text-gray-600">{name}</p>
    </div>
  );
};

export default WriterProfile;
