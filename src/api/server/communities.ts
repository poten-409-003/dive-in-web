"use server";

import { communityDetailSchema, communitySchema } from "@/schemas/communities";

export const getCommunities = async () => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/communities"); 
    const body = await response.json();

    return communitySchema.array().parse(body.data);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCommunity = async (id: number) => {
  try {
    const response = await fetch(`https://api.dive-in.co.kr/communities/${id}`);
    const body = await response.json();

    const dummyCommunities = [
      { id: 1, name: "전체", content: "이것은 전체 카테고리의 게시글입니다." },
      { id: 2, name: "인기글", content: "이것은 인기글 카테고리의 게시글입니다." },
      { id: 3, name: "소통해요", content: "이것은 소통해요 카테고리의 게시글입니다." },
      { id: 4, name: "수영장", content: "이것은 수영장 카테고리의 게시글입니다." },
      { id: 5, name: "수영물품", content: "이것은 수영물품 카테고리의 게시글입니다." },
      { id: 6, name: "수영대회", content: "이것은 수영대회 카테고리의 게시글입니다." },
    ];

    // return communityDetailSchema.parse(body.data);
    return dummyCommunities.find((community) => community.id === id) || null;
    
  } catch (error) {
    console.error(error);
    return null;
  }
};