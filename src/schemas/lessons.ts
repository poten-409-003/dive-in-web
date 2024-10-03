import { z } from "zod";

export const lessonSchema = z.object({
  id: z.number(),
  instructorName: z.string(),
  instructorLogo: z.string(),
  lessonName: z.string(),
  level: z.string(),
  tags: z.string(),
  description: z.string(),
  price: z.number(),
  times: z.number(),
});

export const lessonDetailSchema = z.object({
  id: z.number(),
  instructorName: z.string(),
  instructorLogo: z.string(),
  lessonName: z.string(),
  level: z.string(),
  tags: z.string(),
  description: z.string(),
  price: z.number().optional(),
  times: z.number(),
  time: z.string(),
  maxStudents: z.number(),
  images: z.array(z.string()),
  applyLink: z.array(
    z.object({
      type: z.union([
        z.literal("kakao"),
        z.literal("naver"),
        z.literal("instagram"),
      ]),
      url: z.string(),
    })
  ),
  pool: z.object({
    id: z.number(),
    location: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  }),
});
