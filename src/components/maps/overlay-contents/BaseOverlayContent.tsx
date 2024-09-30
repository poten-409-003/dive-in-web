"use client";

const BaseOverlayContent = ({
  name,
  address,
  kakaoUrl,
  naverUrl,
}: {
  name: string;
  address: string;
  kakaoUrl: string;
  naverUrl: string;
}) => {
  return (
    <div className="absolute -top-12 left-0 flex flex-col gap-1 w-60 bg-white shadow-md py-2 px-3 -translate-x-1/2 -translate-y-full rounded">
      <span className="flex font-bold whitespace-pre-line">{name}</span>
      <span className="flex text-sm whitespace-pre-line">{address}</span>
      <a
        href={kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2 border border-yellow-400 rounded"
      >
        <span className="text-xs">카카오 지도</span>
      </a>
      <a
        href={naverUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2 border border-green-400 rounded"
      >
        <span className="text-xs">네이버 지도</span>
      </a>
    </div>
  );
};

export default BaseOverlayContent;
