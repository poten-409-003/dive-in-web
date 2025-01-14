export type CommunitiesProps = {
  postId: number;
  categoryName?: string;
  title: string;
  content: string;
  image: { repImage: boolean; imageUrl: string } | null;
  likesCnt: number;
  cmmtCnt: number;
  viewCnt: number;
  writer: string;
  writerProfile: string | null;
  createdAt: string;
  // isPopular: boolean;
};

export type CommunityProps = {
  postId: number;
  categoryName?: string;
  title: string;
  content: string;
  images: { repImage: boolean; imageUrl: string }[];
  likesCnt: number;
  viewsCnt: number;
  cmmtCnt: number;
  writer: string;
  writerProfile: string | null;
  createdAt: string;
  commentList: CommentProps[];
  // commentList: [];
  isLiked: boolean;
  // isPopular: boolean;
};

export type CommentProps = {
  cmmtId: number;
  content: string;
  groupName: number;
  orderNumber: number;
  cmntClass: number;
  writer: string;
  writerProfile: string;
  likeCnt: number;
  createdAt: string;
};
