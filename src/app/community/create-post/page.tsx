"use client";

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import Link from "next/link";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineBrokenImage } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("소통해요");
  const CATEGORIES = ["소통해요", "수영장", "수영물품", "수영대회"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("게시글이 작성되었습니다.");
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category); // 선택된 카테고리 업데이트
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col pb-10 relative h-full">
      <div className="flex items-center justify-between py-1 px-1">
        <Link href="/community" className="flex p-3">
          <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>

        <h2 className="text-heading_3 font-bold text-center">글쓰기</h2>
        {/* <Link href={`/communities/${community.id}`} className="flex p-3"> */}

        <button type="submit" form="createPostForm" className="flex p-3">
          <IoCheckmark className="w-6 h-6 text-gray-400 hover:text-blue-900" />
        </button>
      </div>

      {/* 카테고리 */}
      <div className="relative px-4 py-2">
        <button
          className="flex items-center justify-between w-full px-4 py-3 text-left text-sm font-bold border bg-gray-100 border-gray-300 rounded text-gray-700 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selectedCategory}
          <IoIosArrowDown />
        </button>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-full bg-white rounded-t-lg p-4">
              <h3 className="text-gray-600 text-sm mb-2 py-1 font-bold">
                카테고리 선택
              </h3>
              <ul>
                {CATEGORIES.map((category) => (
                  <li
                    key={category}
                    className="py-2 text-sm font-bold hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              {/* <button 
                className="mt-4 w-full py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={()=> setIsOpen(false)}>
              </button> */}
            </div>
          </div>
        )}
      </div>

      <form
        id="createPostForm"
        onSubmit={handleSubmit}
        className="flex flex-col pb-10"
      >
        <input
          type="text"
          maxLength={20}
          placeholder="제목을 입력해주세요(최대 20자)"
          className="text-xl w-full px-4 mb-4 p-2 border-none border-gray-300 font-bold focus:outline-none"
        />

        <textarea
          placeholder="내용을 입력해주세요(최대 2000자)"
          maxLength={2000}
          className="text-base w-full px-4 resize-none overflow-hidden h-80 p-2 border-none border-gray-300 focus:outline-none"
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
        />

        <button type="submit" className="hidden"></button>
      </form>

      {/* <div className="border-b border-gray-300 my-4"></div> */}

      <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-300 py-4">
        <div className="flex items-center jusfity-center gap-8 px-3 text-gray-500">
          <button type="submit" form="createPostForm">
            <MdOutlineBrokenImage className="w-5 h-5 hover:text-blue-900" />
          </button>
          <button type="submit" form="createPostForm">
            <AiOutlineLink className="w-5 h-5 hover:text-blue-900" />
          </button>
        </div>
      </div>

    </div>
  );
}
