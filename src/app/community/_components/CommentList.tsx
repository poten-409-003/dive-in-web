// import { CommentProps } from "@/types/community";
import React from "react";

interface CommentProps {
  cmmtId: number;
  content: string;
  groupName: number;
  orderNumber: number;
  cmntClass: number;
  writer: string;
  writerProfile: string;
  likeCnt: number;
  createdAt: string;
}

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

  console.warn("commentList page:::::::::::::::", commentList);
  return (
    <div className="bg-white-100 px-4 py-4">
      <h3 className="text-xs text-gray-600 mb-2">댓글 {commentList.length}</h3>
      {commentList.map((comment) => (
        <div key={comment.cmmtId} className="py-3">
          <p>{comment.content}</p>
        </div>
      ))}
    </div>

    // <div className="bg-white-100 px-4 py-4">
    //   <h3 className="text-xs text-gray-600 mb-2">댓글 {commentList.length}</h3>
    //   {commentList.map((comment) => (
    //     <Comment
    //       key={comment.cmmtId}
    //       cmmtId={comment.cmmtId}
    //       content={comment.content}
    //       groupName={comment.groupName}
    //       orderNumber={comment.orderNumber}
    //       cmntClass={comment.cmntClass}
    //       writer={comment.writer}
    //       writerProfile={comment.writerProfile}
    //       likeCnt={comment.likeCnt}
    //       createdAt={comment.createdAt}
    //       // writerId={comment.writerId}
    //       // loggedUserId={comment.loggedUserId}
    //     />
    //   ))}
    // </div>
  );
}
