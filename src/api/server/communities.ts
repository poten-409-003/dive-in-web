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
    return communityDetailSchema.parse(body.data);
    
  } catch (error) {
    console.error(error);
    return null;
  }
};