"use client";

import usePhotoSlider from "@/hooks/usePhotoSlider";
import { logger } from "@/utils";
import Image from "next/image";
import { useMemo, useState } from "react";
import PhotoViewerModal from "./PhotoViewerModal";

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

  // 이미지 뷰어 모달을 통해 이미지를 크게 볼 수 있도록 하기
  // 1. slider 컨테이너를 클릭하여, 이미지 뷰어 모달을 열 수 있도록 함
  // 2. 이미지 뷰어 모달에서는 현재 보고 있는 이미지를 크게 보여주고, 다음 이미지로 넘어갈 수 있도록 함
  // 3. esc 키를 누르거나, 닫기 버튼을 눌러 이미지 뷰어 모달을 닫을 수 있도록 함

  const [showImageViewerModal, setShowImageViewerModal] = useState(false);

  return (
    <>
      <div
        className="relative"
        onClick={() => {
          logger.log("PhotoSlider clicked");
          setShowImageViewerModal(true);
        }}
      >
        <div
          className="relative w-full flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
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
              // className="snap-center snap-always relative shrink-0 w-full h-40 overflow-hidden"
              className="snap-center shrink-0 w-full h-40 overflow-hidden"
            >
              <Image
                src={url}
                alt={alt}
                width={400}
                height={300}
                priority={index === 0}
                draggable={true}
                className="w-full h-full object-cover"
                // className="w-full h-full object-cover shadow-xl bg-white"
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
      <PhotoViewerModal
        isOpen={showImageViewerModal}
        onClose={() => setShowImageViewerModal(false)}
        urls={urls}
      />
    </>
  );
};

export default DetailPagePhotoSlider;
