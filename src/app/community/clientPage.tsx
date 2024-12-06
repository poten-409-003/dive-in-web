"use client";

import Link from "next/link";
import { useState } from "react";
import WriterProfile from "../_components/WriterProfile";
import { LuEye } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { TiHeartOutline } from "react-icons/ti";

type Communities = {
  id: number;
  name: string;
};

const CATEGORIES = [
  "전체",
  "인기글",
  "소통해요",
  "수영장",
  "수영물품",
  "수영대회",
];

export default function CommunitiesClient({
  communities,
}: {
  communities: Communities[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const filteredCommunities = communities.filter((community) =>
    selectedCategory === "전체"
      ? true
      : community.name.includes(selectedCategory)
  );

  return (
    <div>
      <div className="flex gap-2 mb-4 px-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-gray-300 text-black font-bold"
                : "bg-gray-100 text-gray-500 font-bold"
            } 
              hover:bg-gray-300`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="flex flex-col gap-6 px-4 pb-10">
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map((community) => (
            <li key={community.id} className="border-b border-gray-300 pb-4">
              <Link
                href={`/communities/${community.id}`}
                className="flex flex-col gap-2"
              >
                <div className="flex-1 flex flex-row items-start gap-1 bg-white-100 rounded-lg p-2">
                 {/* 왼쪽 */}
                  <div className="flex-1 flex flex-col items-start gap-2">
                    <div
                      className={`text-label_sb px-1.5 py-1 rounded bg-chip-1 text-chip-1-foreground`}
                    >
                      <p>{community.name}</p>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-gray-900 text-body_bb">
                        {/* {community.communityTitle} */}
                        게시글 제목
                      </h3>
                    </div>

                    <div className="flex items-center gap-1">
                      <p className="text-body_b text-gray-600">
                        {/* {community.communityContent} */}
                        게시글 내용입니다.
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      <WriterProfile
                        // avatar={community.userImageUrl}
                        // name={community.userName}
                        avatar=""
                        name="작성자"
                      />
                    </div>

                    <div className="flex flex-row items-center gap-4">
                      <div className="flex items-center gap-1">
                        <LuEye className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-500">0</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMessageSquare className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-500">0</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <TiHeartOutline className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-500">0</p>
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽 */}
                  <div className="flex flex-col items-center w-24">
                    <div className="mt-6 w-25 h-25 overflow-hidden rounded-lg">
                      <img
                        src={"/empty/community_thumbnail.png"}
                        alt="썸네일"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="mt-4 text-b text-gray-500 ml-auto">24.10.27</span>
                  </div>

                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-500">해당 커뮤니티가 존재하지 않습니다.</p>
        )}
      </ul>
    </div>
  );
}
