import { z } from "zod";

export const poolSchema = z.object({
  id: z.number(),
  poolName: z.string(),
  poolAddress: z.string(),
  region: z.string(),
  imageUrl: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

export const poolDetailSchema = z.object({
  id: z.number(),
  poolName: z.string(),
  poolAddress: z.string(),
  operatingHours: z.string(),
  closingDays: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  contact: z.string(),
  laneLength: z.number(),
  laneCount: z.number(),
  maxDepth: z.number(),
  minDepth: z.number(),
  facilities: z.string(),
  region: z.string(),
  poolImage: z.array(
    z.object({
      repImage: z.boolean(),
      imageUrl: z.string(),
    })
  ),
  lesson: z.array(
    z.object({
      id: z.number(),
      academyName: z.string(),
      academyImageUrl: z.string(),
      keyword: z.string(),
      lessonName: z.string(),
      level: z.string(),
      price: z.number(),
    })
  ),
});
