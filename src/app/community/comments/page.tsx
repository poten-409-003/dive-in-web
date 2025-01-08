"use client";
import { getComments } from "@/api/server/community";
import WriterProfile from "../_components/WriterProfile";
import { VscKebabVertical } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { getUser } from "@/actions/user";
import { RiShare2Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import { CommentProps } from "@/types/community";

// interface CommentProps {
//   // writerId: number;
//   // loggedUserId: number | null;
//   cmmtId: number;
//   content: string;
//   groupName: number;
//   orderNumber: number;
//   cmntClass: number;
//   writer: string;
//   writerProfile: string;
//   likeCnt: number;
//   createdAt: string;
// }

// interface CommentsProps {
//   commentList: CommentProps[];
// }

const Comment = ({
  cmmtId,
  content,
  groupName,
  orderNumber,
  cmntClass,
  writer,
  writerProfile,
  likeCnt,
  createdAt
}: CommentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const isWriter = writerId === loggedUserId;

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div key={cmmtId} className="py-3">
      {/* 작성자 */}
      <div className="flex flex-row items-start px-4">
        <WriterProfile
          width={24}
          height={24}
          avatar={writerProfile}
          name={writer}
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-700">
            {/* {community.userName || "작성자"} */}
            {writer}
          </p>
        </div>

          <button type="button" className="flex ml-auto">
            <VscKebabVertical
              className="w-6 h-6 text-gray-900"
              onClick={handleMenuOpen}
            />
          </button>
        {/* {isWriter && (
          <button type="button" className="flex ml-auto">
            <VscKebabVertical
              className="w-6 h-6 text-gray-900"
              onClick={handleMenuOpen}
            />
          </button>
        )} */}
      </div>


      <p className="text-gray-700 px-4 mt-2">{content}</p>

      <div className="flex flex-row items-center gap-2 mt-2">
        <span className="text-sm text-gray-500 pl-4">{createdAt}</span>
        <button type="button" className="text-xs text-gray-600">
          <span>답글 쓰기</span>
        </button>
      </div>

      {/* 댓글 메뉴 슬라이드 */}
      <div
        className={`fixed bottom-0 left-1/2 w-full transform -translate-x-1/2 bg-white p-4 pt-6 pb-6 border-t rounded-t-2xl transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          zIndex: 50,
          width: "100%",
          maxWidth: "48rem",
          boxShadow: "0 -1px 3px rgba(0, 0, 0, 0.05)",
        }}
      >
        <ul>
          <li
            className="py-2 text-sm font-bold hover:bg-gray-100 cursor-pointer"
            onClick={() => {}}
          >
            <div className="flex justify-start items-center gap-1 flex-1">
              <GoPencil className="w-5 h-5 text-gray-900" />
              <p className="text-gray-900">수정하기</p>
            </div>
          </li>
          <li
            className="py-2 text-sm font-bold hover:bg-gray-100 cursor-pointer"
            onClick={() => {}}
          >
            <div className="flex justify-start items-center gap-1 flex-1">
              <GoTrash className="w-5 h-5 text-red-500" />
              <p className="text-red-500">삭제하기</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function CommentList({commentList}: {commentList: CommentProps[]}) {
  // const [comments, setComments] = useState<CommentProps[]>([]);
  // const [loggedUserId, setLoggedUserId] = useState<number | null>(1);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const data = await getComments();
  //     setComments(data);
  //   };
  //   fetchComments();

  //   const fetchUserId = async () => {
  //     // const userId = await getUser();
  //     const userId = 1;
  //     setLoggedUserId(userId);
  //   };
  //   fetchUserId();
  // }, []);

  console.warn("commentList::::::::::::::::&&&&&&&&&:", commentList);

  return (
    <div className="bg-white-100 px-4 py-4">
      <h3 className="text-xs text-gray-600 mb-2">댓글 {commentList.length}</h3>
      {commentList.map((comment) => (
        <Comment
          key={comment.cmmtId}
          cmmtId={comment.cmmtId}
          content={comment.content}
          groupName={comment.groupName}
          orderNumber={comment.orderNumber}
          cmntClass={comment.cmntClass}
          writer={comment.writer}
          writerProfile={comment.writerProfile}
          likeCnt={comment.likeCnt}
          createdAt={comment.createdAt}
          // writerId={comment.writerId}
          // loggedUserId={comment.loggedUserId}
        />
      ))}
    </div>
  );
}
