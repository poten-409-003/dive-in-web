"use client";

import usePhotoSlider from "@/hooks/usePhotoSlider";
import Image from "next/image";
import { useMemo } from "react";

type Props = {
  imageUrls: string[];
  alt: string;
};

const DetailPagePhotoSlider = ({ imageUrls, alt }: Props) => {
  const urls = useMemo(() => {
    if (imageUrls.length === 0) {
      return ["/empty/image.png"];
    }

    return imageUrls;
  }, [imageUrls]);

  const { sliderRef, imageRefs, visibleImageNumber } = usePhotoSlider(urls);
  return (
    <div className="relative">
      <div
        className="relative w-full flex snap-x snap-mandatory overflow-x-auto no-scrollbar"
        ref={sliderRef}
      >
        {/* snap-mandatory를 활성화하여, 약간의 스크롤로 snap을 강제하여 쉽게 넘어갈 수 있도록 함 */}
        {urls.map((url, index) => (
          <div
            key={url}
            ref={(el) => {
              if (el) {
                imageRefs.current[index] = el;
              }
            }}
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
      <div className="absolute bottom-3 right-3 flex items-center gap-0.5 bg-gray-900/70 px-1.5 py-0.5 rounded">
        <span className="text-label_sb text-gray-500">
          {visibleImageNumber} / {urls.length}
        </span>
      </div>
    </div>
  );
};

export default DetailPagePhotoSlider;
