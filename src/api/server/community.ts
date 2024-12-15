"use server";

import { communityDetailSchema, communitySchema } from "@/schemas/communities";

export const getCommunities = async () => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/community/posts/list/none"); 
    const body = await response.json();

    return communitySchema.array().parse(body.data);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCommunity = async (id: number) => {
  try {
    const response = await fetch(`https://api.dive-in.co.kr/community/posts/${id}`);
    const body = await response.json();

    const dummyCommunities = [
      { id: 1, name: "전체", title: "제목1", content: "이것은 전체 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
      { id: 2, name: "인기글", title: "제목2", content: "이것은 인기글 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
      { id: 3, name: "소통해요", title: "제목3", content: "이것은 소통해요 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
      { id: 4, name: "수영장", title: "제목4", content: "이것은 수영장 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
      { id: 5, name: "수영물품", title: "수모 사고싶은데", content: "수모 브랜드 추천해주세요 얼른 빨리요 지금 당장", views: 21, likes: 13, comments: 5, date: "2024.10.27"},
      { id: 6, name: "수영대회", title: "제목5", content: "이것은 수영대회 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
    ];

    // return communityDetailSchema.parse(body.data);
    return dummyCommunities.find((community) => community.id === id) || null;
    
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createCommunity = async(formData: FormData) => {
  try {
    const response = await fetch("/api/community/posts", {
      method: "POST",
      body: formData,
    });

    if(!response){
      throw new Error("게시글 작성 실패!");
    }
    
    const result = await response.json();
    console.log("글 작성 성공:", result);
  } catch (error) {
    console.log("글 작성 실패:", error);
  }
};