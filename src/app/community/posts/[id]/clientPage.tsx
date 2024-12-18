"use client";
import { useRef, useState } from "react";
import { LuSend } from "react-icons/lu";
import { TiHeartOutline } from "react-icons/ti";
import { RiShare2Line } from "react-icons/ri";
import WriterProfile from "../../_components/WriterProfile";
import CommentList from "../../comments/page";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import { VscKebabVertical } from "react-icons/vsc";
import Link from "next/link";

type CommunityProps = {
  community: {
    id: number;
    name: string;
    title: string;
    content: string;
    date: string;
    views: number;
    likes: number;
    comments: number;
  };
};

const ClientCommunityPage = ({ community }: CommunityProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [comment, setComment] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;

    setComment(e.target.value);

    if(textarea){
      textarea.style.height = "1.25rem"; //초기높이
      textarea.style.height = `${textarea.scrollHeight}px`; //내용에 맞게 높이설정
    }
  };

  return (
    <div className="flex flex-col pb-10 relative h-full">
      {/* 상단Nav */}
      <div className="flex items-center justify-between py-1 px-1">
        <Link href="/community/posts/list/none" className="flex p-3">
          <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>

        <button type="button" className="flex p-3">
          <VscKebabVertical className="w-6  h-6 text-gray-900" />
        </button>
      </div>

      {/* 태그 */}
      <div
        className={`mx-4 text-label_sb px-1.5 py-1 rounded bg-chip-1 text-chip-1-foreground inline-block w-fit`}
      >
        <p>{community.name}</p>
      </div>

      {/* 작성자 */}
      <div className="flex flex-row items-start px-4 mt-3">
        <WriterProfile
          // avatar={community.userImageUrl}
          // name={community.userName}
          width={36}
          height={36}
          avatar=""
          name=""
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-700">
            {/* {community.userName || "작성자"} */}
            작성자이름수정하기
          </p>

          <div className="flex gap-2 text-sm text-gray-500">
            <span className="text-sm text-gray-500 ml-auto">
              {community.date}
            </span>
            <span className="text-sm text-gray-500 ml-auto">
              조회{community.views}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold">{community.title}</h1>
        <p className="text-gray-700 mt-4 whitespace-pre-line">
          {community.content}
        </p>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center gap-1 flex-1">
          <TiHeartOutline className="w-5 h-5 text-gray-700" />
          <p className="text-gray-700">{community.likes}</p>
        </div>
        <div className="flex justify-center items-center gap-1 flex-1">
          <RiShare2Line className="w-5 h-5 text-gray-700" />
          <p className="text-gray-500"></p>
        </div>
      </div>

      <div className="bg-gray-100 py-2 mt-4"></div>
      <CommentList />

      {/* 댓글 상자 */}
      <div className="relative px-4 pb-4">
        {!isLoggedIn ? (
          <p className="flex items-center justify-between w-full px-4 py-5 text-left text-sm bg-gray-100 rounded text-gray-500 focus:outline-none">
            로그인 후 댓글 달기가 가능합니다
            <button 
              className="text-left text-sm font-semibold text-blue-900"
              onClick={() => {
                console.log("로그인되었습니다");
                setIsLoggedIn(true);
              }}
            >
              로그인
            </button>
          </p>
        ) : (
          <div className="flex flex-row px-4 py-5 items-center bg-gray-100 rounded">
            <textarea 
            ref={textareaRef} 
            value={comment} 
            onChange={handleTextareaHeight}
            placeholder="댓글을 입력해주세요."//500자 제한
            maxLength={500}
            style={{
              height: "1.25rem", //초기높이 20
              lineHeight: "1.25rem", //높이 20
              padding: "0px", 
              boxSizing: "border-box", // 높이에 패딩과 테두리 포함
            }}
            className="w-full resize-none overflow-hidden border-none text-left text-sm text-gray-700 bg-gray-100 focus:outline-none" />
            <button className="text-left text-sm font-semibold text-gray-500">
              <LuSend size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientCommunityPage;
