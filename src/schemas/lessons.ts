import { z } from "zod";

export const lessonSchema = z.object({
  id: z.number(),
  academyName: z.string(),
  academyImageUrl: z.string(),
  lessonName: z.string(),
  level: z.string(),
  keyword: z.string(),
  price: z.string(),
});

export const lessonDetailSchema = z.object({
  id: z.number(),
  lessonName: z.string().default(""),
  level: z.string().default(""),
  capacity: z.string().default(""),
  price: z.string().default(""),
  keyword: z.string().default(""),
  lessonDetail: z.string().default(""),
  lessonSchedule: z.string().default(""),
  lessonStatus: z.string().default(""),
  academy: z.object({
    id: z.number(),
    academyName: z.string().default(""),
    academyInfo: z.string().default(""),
    profileImageUrl: z.string().default(""),
  }),
  pool: z.object({
    id: z.number(),
    poolName: z.string().default(""),
    poolAddress: z.string().default(""),
    region: z.string().default(""),
    imageUrl: z.string().default(""),
    latitude: z.number().or(z.string()).pipe(z.coerce.number()),
    longitude: z.number().or(z.string()).pipe(z.coerce.number()),
  }),
  instructors: z
    .object({
      id: z.number(),
      instructorId: z.number(),
      instructorName: z.string().default(""),
      instructorInfo: z.string().default(""),
    })
    .array(),
  images: z.object({ imageUrl: z.string() }).array(),
  applyChannels: z
    .object({ applyUrlType: z.string(), applyUrl: z.string() })
    .array(),
});
