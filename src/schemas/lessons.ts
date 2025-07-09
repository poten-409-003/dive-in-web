import { z } from "zod";

export const lessonSchema = z.object({
  id: z.number(),
  academyName: z.string(),
  academyImageUrl: z
    .string()
    .nullable()
    .default("/empty/academy_profile.png")
    .transform((value) => value || "/empty/academy_profile.png"),
  lessonName: z.string(),
  level: z.string(),
  keyword: z.string(),
  // price: z.string(),
  price: z.string().nullable(),
});

// export const lessonDetailContentSchema = z.object({
//   classTopic: z.string().default(""),
//   eligibilityRequirements: z.array(z.string()).default([]),
//   classIntroduction: z.string().default(""),
//   applicationMethod: z.array(z.string()).default([]),
//   refundPolicy: z.array(z.string()).default([]),
// });

export const lessonDetailContentSchema = z.object({
    topic: z.string(),
    eligibilityRequirements: z.array(z.string()).nullable(),
    introduction: z.string().nullable(),
    applicationMethod: z.array(z.object({
      applyUrl: z.string(),
      applyUrlType: z.string(),
    })),
    refundPolicy: z.array(z.string()).nullable(),
  });

export const lessonDetailSchema = z.object({
  id: z.number(),
  lessonName: z.string().default(""),
  level: z.string().default(""),
  // capacity: z.string().default(""),
  capacity: z.string().nullable().default(""),
  // price: z.string().default(""),
  price: z.string().nullable().default(""),
  keyword: z.string().default(""),
  lessonDetail: lessonDetailContentSchema,
  lessonSchedule: z.string().nullable().default(""),
  lessonStatus: z.string().default(""),
  academy: z.object({
    id: z.number(),
    academyName: z.string().default(""),
    academyInfo: z.string().nullable().default(""),
    profileImageUrl: z
      .string()
      .nullable()
      .default("/empty/image.png")
      .transform((value) => value || "/empty/academy_profile.png"),
  }),
  pool: z
    .object({
      id: z.number(),
      poolName: z.string().default(""),
      poolAddress: z.string().nullable(),
      region: z.string().default(""),
      imageUrl: z.string().default(""),
      latitude: z.number().or(z.string()).pipe(z.coerce.number()),
      longitude: z.number().or(z.string()).pipe(z.coerce.number()),
    })
    .nullable(),
    images: z.object({ imageUrl: z.string() }).array(),
  });

  // lessonDetail: z.object({
  //   topic: z.string(),
  //   eligibilityRequirements: z.array(z.string()).nullable(),
  //   introduction: z.string(),
  //   applicationMethod: z.array(z.object({
  //     applyUrl: z.string(),
  //     applyUrlType: z.string(),
  //   })),
  //   refundPolicy: z.array(z.string()).nullable(),
  // }),
  //  }),
  // lessonDetail: z.string().default(""),
  // lessonSchedule: z.string().default(""),
    // instructors: z
  //   .object({
  //     id: z.number(),
  //     instructorId: z.number(),
  //     instructorName: z.string().default(""),
  //     instructorInfo: z.string().default(""),
  //   })
  //   .array().nullable().optional(),
  // applyChannels: z
  //   .object({
  //     applyUrlType: z.string(),
  //     applyUrl: z
  //       .string()
  //       .nullable()
  //       .transform((value) => value || ""),
  //   })
  //   .array(),

//이 부분이 문제
// export const lessonDetailContentSchema = z.object({
//   classTopic: z.string().default(""),
//   eligibilityRequirements: z.array(z.string()).default([]),
//   classIntroduction: z.string().default(""),
//   applicationMethod: z.array(z.string()).default([]),
//   refundPolicy: z.array(z.string()).default([]),
// });

