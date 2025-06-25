"use server";

import { homeResponseScheme } from "@/schemas/home";

export const getHome = async () => {
  try {
    const response = await fetch("https://api.dive-in.co.kr/home/initial", {
      next: { revalidate: 0 }, //최신상태 유지를 위해 캐싱 X
    });

    const body = await response.json();
    console.log("::::::::::::::::지금 body이 오고있나요?::", body);
    const validateData = homeResponseScheme.parse(body);
    console.log("::::::::::::::::지금 validateData이 오고있나요?::", validateData);

    return validateData.data;
  } catch (error) {
    console.error(error);
    return {
      topViewLessonList: [],
      newLessonList: [],
      topViewPostList: [],
      newPostList: [],
      competitionPostList: [],
    };
  }
};
