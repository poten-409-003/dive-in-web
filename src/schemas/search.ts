import { z } from "zod";

export const searchSchema = z.object({
  title: z.string(),
  // content: z.array(z.string()),
  content: z.string(),
  categoryName: z.string(),
  contentSummary: z.string(),
  dataUrl: z.string(),
  createdAt: z.string(),
});

// export const searchDetailSchema = z.object({


// });