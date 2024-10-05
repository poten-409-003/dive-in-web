import { lessonDetailResponse } from "@/data/dummy";
import { lessonDetailSchema, lessonSchema } from "@/schemas/lessons";
import { camel, mapKeys } from "radash";

export const getLessons = async () => {
  const response = await fetch("https://api.dive-in.co.kr/lessons");
  const body = await response.json();
  return lessonSchema.array().parse(body.data);
};

export const getLesson = async (id: number) => {
  console.log("getLesson", id);
  const response = lessonDetailResponse;
  const transformedResponse = mapKeys(response, camel);
  return lessonDetailSchema.parse(transformedResponse);
};
