"use client";

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import Link from "next/link";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineBrokenImage } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { createCommunity } from "@/api/server/community";

const CATEGORIES = ["소통해요", "수영장", "수영물품", "수영대회"];

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("소통해요");
  const [content, setContent] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("500px");
  
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null); //input참조
  
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [link, setLink] = useState("");
  const [preview, setPreview] = useState<any>(null);//OG데이터
  const [ogContent, setOgContent] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    if(isLinkOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }else{
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isLinkOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("category", selectedCategory);

    try {
      const result = await createCommunity(formData);
      console.log("글 작성 성공", result);
    } catch (err) {
      console.log("글 작성 실패", err);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category); // 선택된 카테고리 업데이트
    setIsOpen(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files); //선택파일 배열변환
    if (images.length + selectedFiles.length > 5) {
      alert("이미지는 최대 5장까지 업로드 가능합니다.");
      return;
    }

    setImages((prev) => [...prev, ...selectedFiles]); //이미지추가
  };

  const handleImageDelete = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index)); //해당index 이미지삭제
  };

  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  const toggleSlide = () => {
    setIsLinkOpen((prev) => !prev);
  };

  const handleSubmitLink = async () => {
    console.log("링크 삽입 완료", link);
    setIsLinkOpen(false);
    setPreview({title: "링크 제목", description: "링크 설명", image: ""}); //더미데이터
    setLink("");
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsLinkOpen(false);
    }
  };

  return (
    // <div className="flex flex-col pb-10 relative h-full">
    <div className="flex flex-col min-h-screen pb-[4.5rem]">
      <div className="flex items-center justify-between py-1 px-1">
        <Link href="/community/posts/list/none" className="flex p-3">
          <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>

        <h2 className="text-heading_3 font-bold text-center">글쓰기</h2>
        {/* <Link href={`/communities/${community.id}`} className="flex p-3"> */}

        <button type="submit" form="createPostForm" className="flex p-3">
          <IoCheckmark className="w-6 h-6 text-gray-400 hover:text-blue-900" />
        </button>
      </div>

      {/* 카테고리 */}
      <div className="relative px-4 py-4">
        <button
          className="flex items-center justify-between w-full px-4 py-3 text-left text-sm font-bold border bg-gray-100 border-gray-300 rounded-xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selectedCategory}
          <IoIosArrowDown />
        </button>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-white rounded-t-2xl p-4" style={{width: "48rem"}}>
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
        className="flex flex-col"
      >
        <input
          id="title"
          type="text"
          maxLength={20}
          placeholder="제목을 입력해주세요(최대 20자)"
          className="text-xl w-full px-4 mb-4 border-none border-gray-300 font-bold focus:outline-none"
        />

        {/* 이미지 */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
        />

        {/* 이미지 미리보기 */}
        <div className="flex gap-2 flex-wrap px-4 pb-3">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)} //이미지 미리보기 URL
                alt={`이미지 ${index + 1}`}
                className="w-20 h-20 object-cover rounded"
              />
              <button
                type="button"
                onClick={() =>
                  setImages((prev) => prev.filter((_, i) => i !== index))
                }
                className="absolute w-5 h-5 top-1 right-1 bg-gray-600 text-white font-semibold text-xs flex justify-center rounded-full"
              >
                x
              </button>
            </div>
          ))}
        </div>

        {/* 내용 */}
        <textarea
          placeholder="내용을 입력해주세요(최대 2000자)"
          maxLength={2000}
          className="text-base w-full px-4 resize-none overflow-hidden border-none border-gray-300 focus:outline-none"
          style={{ minHeight: "17.2rem" }}
          onChange={(e) => setContent(e.target.value)}
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
        />

        {/* OG 썸네일 */}
        {preview && (
          <div className="p-4 mt-4 border rounded bg-gray-100">
            <p className="font-bold">{preview.title}</p>
            <p className="text-sm text-gray-600">{preview.description}</p>
          </div>
        )}

        <button type="submit" className="hidden"></button>
      </form>

      {/* <div className="border-b border-gray-300 my-4"></div> */}

      <div className="fixed w-full bottom-14 p-4 max-w-[48rem] bg-white border-t border-gray-300">
        <div className="flex justify-start items-center jusfity-center gap-8 px-3 text-gray-500">
          <button
            type="button"
            onClick={handleImageButtonClick}
          >
            <MdOutlineBrokenImage className="w-5 h-5 hover:text-blue-900" />
          </button>
          <button type="button" onClick={toggleSlide}>
            <AiOutlineLink className="w-5 h-5 hover:text-blue-900" />
          </button>
        </div>
      </div>

      {/* 링크 슬라이드 */}
      <div className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-4 pt-6 pb-10 border-t rounded-t-2xl transition-transform duration-300 ${
        isLinkOpen? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          width: "100%",
          maxWidth: "48rem",
          boxShadow: "0 -1px 3px rgba(0, 0, 0, 0.05)"
        }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-600">
              링크 삽입
            </h3>
            <button
              onClick={()=>{
                handleSubmitLink();
                setIsLinkOpen(false);
              }}
              className="text-gray-500 hover:text-gray-700"
              >
              <IoCheckmark className="w-6 h-6 text-gray-400 hover:text-blue-900" />
            </button>
          </div>

        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="링크 주소를 붙여넣어주세요"
          className="w-full p-2 border rounded-xl focus:outline-none border-gray-300"
          />

      </div>

    </div>
  );
}
