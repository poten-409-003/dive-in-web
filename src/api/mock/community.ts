//Mock data comminities

import { SCROLL_MOCK_DATAS } from "@/data/scrollMock";
import { communityResponseDetailProps } from "@/types/community";

//::목업 테스트용
const PAGE_SIZE = 20;//한번에 게시글 몇개 보여줄건지

export const getCommunitiesMock = async(
  category: string = "none",
  page: string = "0"
): Promise<communityResponseDetailProps> => {
  const pageNum = Number(page) || 0;

  //카테고리 필터 우선 제외 - community 게시판으로만 테스트
  const filtered = SCROLL_MOCK_DATAS;

  const start = pageNum * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const slice = filtered.slice(start, end);

  //네트워크 지연 상황
  await new Promise((r) => setTimeout(r, 400));

  return {
    posts: slice,
    totalPosts: filtered.length,
    hasMore: end < filtered.length,
  };

};