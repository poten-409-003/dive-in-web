"use client";
import ChatIcon from "@/components/icons/ChatIcon";
import PoolIcon from "@/components/icons/PoolIcon";
import SwimHatIcon from "@/components/icons/SwimHatIcon";
import { SearchResult } from "@/types/search";

export default function ClientSearch({}: {}) {
  return (
    <div>
      {/* <p className="p-4">클라이언트 페이지</p> */}
      <ul className="list-none px-4">
      {searchResults.map((result) => (
          <li key={result.id} className="border-b border-gray-300 pb-4">
            <div className="flex flex-col items-start bg-white-100 rounded-lg mt-4">
              <div className="flex flex-row">
                {getCategoryIcon(result.categoryName)}
                <div
                  className={`text-label_sb py-1 rounded text-chip-1-foreground inline-block w-fit`}
                  >
                  <p className="pl-2">{result.categoryName}</p>
                </div>
              </div>
              <p className="text-md pl-8">{result.title}</p>
              <p className="text-sm text-gray-600 pl-8">{result.address}</p>
            </div>
          </li>
      ))}
      </ul>
    </div>
  );
}

const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case "수영장": return <PoolIcon className="h-6 w-6 text-gray-400" />;
    case "클래스": return <SwimHatIcon className="h-6 w-6 text-gray-400" />;
    case "커뮤니티": return <ChatIcon className="h-6 w-6 text-gray-400" />;
    default: return <div></div>;
  }
};

const searchResults: SearchResult[] = [
  {
    id: 1,
    categoryName: "수영장",
    title: "은평청여울수영장",
    address: "서울 은평구 통일로 304",
  },
  {
    id: 2,
    categoryName: "수영장",
    title: "은평청여울수영장 2",
    address: "서울 은평구 통일로 304",
  },
  {
    id: 3,
    categoryName: "클래스",
    title: "은평 유소년 클래스",
  },
  {
    id: 4,
    categoryName: "클래스",
    title: "은평 유소년 클래스스스 마스터즈",
  },
  {
    id: 5,
    categoryName: "커뮤니티",
    title: "수영장이 있나요? 은평구에",
  },
  {
    id: 6,
    categoryName: "커뮤니티",
    title: "은평구 맛집 추천해주세여",
  },
  {
    id: 7,
    categoryName: "커뮤니티",
    title: "은평구 어린이 놀이터 위치 알려주세요",
  },
  {
    id: 8,
    categoryName: "커뮤니티",
    title: "은평구에서 열리는 축제 정보 알려주세요",
  },
];
