import { lessonDetailResponse, lessonsResponse } from "@/data/dummy";
import { lessonDetailSchema, lessonSchema } from "@/schemas/lessons";
import { camel, mapKeys } from "radash";

// const getLessonsResponseSchema = z
//   .record(z.any())
//   .transform((data) => mapKeys(data, camel))
//   .pipe(lessonSchema);

export const getLessons = async () => {
  // #1
  const response = lessonsResponse;
  const transformedResponse = response.map((lesson) => mapKeys(lesson, camel));
  return lessonSchema.array().parse(transformedResponse);

  // #2
  // return getLessonsResponseSchema.array().parse(lessonsResponse);
};

export const getLesson = async (id: number) => {
  console.log("getLesson", id);
  const response = lessonDetailResponse;
  const transformedResponse = mapKeys(response, camel);
  return lessonDetailSchema.parse(transformedResponse);
};
