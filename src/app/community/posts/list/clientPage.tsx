"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FloatingButton from "../../_components/FloatingButton";
import CategoryFilter from "@/app/community/_components/CategoryFilter";
import { getCommunities } from "@/api/server/community";
import { useRouter } from "next/navigation";
import {
  CommunitiesProps,
  communityResponseDetailProps,
  communityResponseProps,
} from "@/types/community";
import { CATEGORIES } from "@/constants/categories";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function CommunitiesClient({
  communityList,
  category,
  page,
}: {
  // communityList: CommunitiesProps[];
  communityList: communityResponseDetailProps;
  category: string;
  page: string;
}) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>(category); //기본 카테고리
  const { ref, inView } = useInView({
    threshold: 0.5, // 요소가 50% 보일 때 inView가 true로 바뀜
  });

  //서버 데이터 + 무한스크롤
  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    status,
    isLoading,
    isError,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["communities", selectedCategory],
    queryFn: ({ pageParam = 0 }) =>
      getCommunities(selectedCategory, String(pageParam)),
    initialPageParam: 0, //처음페이지 번호
    getNextPageParam: (lastPage, allPages) => {
      //lastPage = { posts, totalPosts, hasMore }
      if (!lastPage.hasMore) return undefined; //더 없으면 끝
      return allPages.length; //0,1,2...식으로 페이지 증가
    },
  });

  //모든 페이지 하나로 펼치기
  const communities = data?.pages.flatMap((page) => page.posts) ?? [];

  //inVies되면 다음 페이지 요청
  useEffect(() => {
    if (!inView || !hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  //카테고리 변경시 URL만 업데이트 -> 데이터는 queryKey가 바뀌면서 자동 refetch
  useEffect(() => {
    router.push(
      `/community/posts/list?category=${selectedCategory}&page=0` 
    ); //여기서 page=0이 되어야 일치
  }, [selectedCategory, router]);

  if (isLoading && !data) {
    return (
      <>
    <div className="w-6 h-6 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
    <div className="text-gray-400">게시글을 불러오는 중입니다...</div>
      </>
    );
  }

  if(isError){
    return (<div className="text-gray-400">게시글을 불러오는 중 오류가 발생했습니다.</div>);
  }

  return (
    <div>
      <div className="flex gap-2 mb-4 px-4">
        {CATEGORIES.map((cate) => (
          <button
            key={cate.key}
            onClick={() => setSelectedCategory(cate.key)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cate.key
                ? "bg-gray-300 text-black font-bold"
                : "bg-gray-100 text-gray-500 font-bold"
            } 
              hover:bg-gray-300`}
          >
            {cate.name}
          </button>
        ))}
      </div>

      {/*로딩 중*/}
      {/* {loading? (
          <p>로딩 중...</p>
        ) : ( */}
      <ul className="flex flex-col gap-1 px-4 pb-10">
        {communities && communities.length > 0 ? (
          communities.map((community) => (
            <CategoryFilter
              key={community.postId}
              community={community}
              selectedCategory={selectedCategory}
            />
          ))
        ) : (
          // <p className="text-gray-500">해당 커뮤니티가 존재하지 않습니다.</p>
          <p className="text-gray-500"></p>
        )}
      </ul>
      {/* )} */}
      <FloatingButton />

      {/* 무한스크롤 감지 */}
      {hasNextPage ? (
        // 첫 로딩 때 큰 로딩스피너
        <div className="flex justify-center pb-8 gap-2">
          {/* 다음페이지가 있을 때 */}
          {isFetchingNextPage && (
            <>
              <div className="w-6 h-6 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
              <div className="text-gray-400">Loading more...</div>
            </>
          )}
          <div ref={ref} className="h-4" />
        </div>
      ) : (
        <p className="text-center text-gray-400 pb-8">
          더 이상 게시물이 없습니다.
        </p>
      )}
    </div>
  );
}
