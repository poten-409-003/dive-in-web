"use server";

import { communityDetailSchema, communitySchema } from "@/schemas/communities";

export const getCommunities = async (category: string = "none", page: string = "0") => {
  try {
    const url = `https://api.dive-in.co.kr/community/posts/list/${category}/${page}`;
    const response = await fetch(url); 

    if(!response.ok){
      throw new Error(`HTTP에러 상태 코드: ${response.status}`);
    }
    const body = await response.json();
    if(!body.data || !Array.isArray(body.data)) {
      console.warn("API 응답 데이터가 비정상적입니다:", body);
      return [];
    }

    const validateData = communitySchema.array().parse(body.data);
    console.log(validateData);
    return validateData;

  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCommunity = async (id: string) => {
  try {
    const response = await fetch(`https://api.dive-in.co.kr/community/posts/${id}`);
    if(!response.ok){
      throw new Error(`HTTP에러 상태 코드: ${response.status}`);
    }
    const body = await response.json();
    if(!body.data || !Array.isArray(body.data)) {
      console.warn("API 응답 데이터가 비정상적입니다:", body);
      return [];
    }

    const validateData = communityDetailSchema.array().parse(body.data);
    console.log(validateData);
    return validateData;
    // return communityDetailSchema.parse(body.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createCommunity = async(formData: FormData) => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/community/posts", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if(!response){
      throw new Error("게시글 작성 실패!");
    }
    
    const result = await response.json();
    console.log("글 작성 성공:", result);
    if(result?.success && result?.data?.postId) {
      return result.data.postId; 
    }else{
      throw new Error("postId를 반환하지 않았습니다.");
    }
  } catch (error) {
    console.log("글 작성 실패:", error);
    throw error;
  }
};


export const updateCommunity = async (postId: string, formData: FormData) => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/community/posts/${id}");
    const body = await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteCommunity = async (id: string) => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/community/posts/${id}");
    const body = await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};






// 댓글
// export const getComments = async () => {
//   try {
//     const response = await fetch("https://api.dive-in.co.kr/community/comments");
//     const body = await response.json();
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const getOG = async (link: string) => {
  try {
    const response = await fetch("/api/shorten-link", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({url: link}),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};


export const getComments = async () => {
  try {
    // const response = await fetch("https://api.dive-in.co.kr/community/comments");
    // const body = await response.json();
    const dummyCommunities = [
      {
        id: 1,
        content: "저도 제피부가 문제일줄만 알았는데 수모를 바꾸니 덜 눌리더라구요 수모마다 차이도 있는듯 해요~",
        date: "2024.03.21",
        writer: "lfenl",
        writerId: 1,
        loggedUserId: 1,
      },
      {
        id: 2,
        content: "저도 제피부가 문제일줄만 알았는데 수모를 바꾸니 덜 눌리더라구요",
        date: "2024.03.21",
        writer: "ㅇㄻㄴㅇㅁㄴㅇㅎ",
        writerId: 2,
        loggedUserId: 1,
      },
    ];

    return dummyCommunities;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createComment = async (formData: FormData) => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/community/comments", {
      method: "POST",
      body: formData,
    });

    if(!response){
      throw new Error("게시글 작성 실패!");
    }

    const result = await response.json();
    console.log("댓글 작성 성공:", result);
  } catch (error) {
    console.log("댓글 작성 실패:", error);
    return [];
  }
};







export const updateComments = async () => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/community/comments");
    const body = await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteComments = async () => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/community/comments");
    const body = await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};
