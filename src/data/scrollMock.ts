import { CommunitiesProps } from "@/types/community";

//무한스크롤 성능테스트를 위한 scroll mock data
export const SCROLL_MOCK_DATAS: CommunitiesProps[] = Array.from({length: 1000},(_, i) => ({
  postId: i + 1,
  categoryName: "소통해요",
  title: `테스트 ${i + 1}`,
  content: `내용 ${i + 1}`,
  image: null,
  likesCnt: 0,
  cmntCnt: 0,
  viewCnt: 0,
  writer: "testUser",
  writerProfile: null,
  createdAt: new Date().toISOString(),
  updatedAt: null,
  isPopular: false,
}));

// export type CommunitiesProps = {
//   postId: number;
//   categoryName?: string;
//   title: string;
//   content: string;
//   image: { repImage: boolean; imageUrl: string } | null;
//   likesCnt: number;
//   cmntCnt: number;
//   viewCnt: number;
//   writer: string;
//   writerProfile: string | null;
//   createdAt: string;
//   updatedAt: string | null;
//   isPopular: boolean;
// };