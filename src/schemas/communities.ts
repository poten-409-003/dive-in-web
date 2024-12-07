import { z } from "zod";

export const communitySchema = z.object({
  id: z.number(),
  title: z.string()
});

export const communityDetailSchema = z.object({});

export const communityDetailContentSchema = z.object({});