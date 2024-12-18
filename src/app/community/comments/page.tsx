"use client";
import { getComments } from "@/api/server/community";
import WriterProfile from "../_components/WriterProfile";
import { VscKebabVertical } from "react-icons/vsc";

interface CommentProps {
  id: number;
  content: string;
  date: string;
  writer: string;
}

const Comment = ({ id, content, date, writer }: CommentProps) => {
  return (
    <div key={id} className="py-3">
      {/* 작성자 */}
      <div className="flex flex-row items-start px-4">
        <WriterProfile
          // avatar={community.userImageUrl}
          // name={community.userName}
          width={24}
          height={24}
          avatar=""
          name=""
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-700">
            {/* {community.userName || "작성자"} */}
            {writer}
          </p>
        </div>
        <button type="button" className="flex ml-auto">
          <VscKebabVertical className="w-6 h-6 text-gray-900" />
        </button>
      </div>
      <p className="text-gray-700 px-4 mt-2">{content}</p>

      <div className="flex flex-row items-center gap-2 mt-2">
      <span className="text-sm text-gray-500 pl-4">{date}</span>
        <button type="button" className="text-xs text-gray-600">
          <span>답글 쓰기</span>
        </button>
      </div>
    </div>
  );
};

export default async function CommentList() {
  const comments = await getComments();

  return (
    <div className="bg-white-100 px-4 py-4">
      <h3 className="text-xs text-gray-600 mb-2">댓글 {comments.length}</h3>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          content={comment.content}
          date={comment.date}
          writer={comment.writer}
        />
      ))}
    </div>
  );
}
