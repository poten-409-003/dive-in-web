"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  imageUrls: string[];
  alt: string;
};

const DetailPagePhotoSlider = ({ imageUrls, alt }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full flex snap-x snap-mandatory overflow-x-auto no-scrollbar">
      {/* snap-mandatory를 활성화하여, 약간의 스크롤로 snap을 강제하여 쉽게 넘어갈 수 있도록 함 */}
      {imageUrls.map((url, index) => (
        <div
          key={url}
          ref={sliderRef}
          className="snap-center snap-always relative shrink-0 w-full h-40 overflow-hidden"
        >
          <Image
            src={url}
            alt={alt}
            width={400}
            height={300}
            priority={index === 0}
            className="w-full h-full object-cover shadow-xl bg-white"
          />
        </div>
      ))}
    </div>
  );
};

export default DetailPagePhotoSlider;
