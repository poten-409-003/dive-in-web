import { z } from "zod";

export const imageSchema = z.object({
  repImage: z.boolean(),
  imageUrl: z.string().url(),
});

export const communitySchema = z.object({
  postId: z.number(),
  categoryName: z.string().optional(),
  title: z.string(),
  content: z.string(),
  image: imageSchema.nullable(),
  likesCnt: z.number(),
  cmmtCnt: z.number(),
  viewCnt: z.number(),
  writer: z.string(),
  writerProfile: z.string().nullable(),
  createdAt: z.string(),
  // isPopular: z.string(),
  // isPopular: z.boolean(),
});

// export const postsSchema = z.object({
//   success: z.boolean(),
//   message: z.string().nullable(),
//   data: z.array(communitySchema).default([]),
// });

export const communityDetailCommentSchema = z.object({
  cmmtId: z.number(),
  content: z.string().max(500),
  groupName: z.number(),
  orderNumber: z.number(),
  cmntClass: z.number(),
  writer: z.string(),
  writerProfile: z.string().optional(),
  // writerProfile: z.string().url().optional(),
  likesCnt: z.number(),
  createdAt: z.string(),
});

export const communityDetailReCommentSchema = z.object({
  // recommentId: z.number(),
  id: z.number(), //대댓글을 달 댓글의 ID
  content: z.string().max(500),
  postId: z.number(),
  memberId: z.number(),
});

export const communityDetailSchema = z.object({
  postId: z.number(),
  categoryName: z.string().optional(),
  title: z.string(),
  content: z.string(),
  images: z.array(imageSchema).max(5), //이미지가 최대 5장 들어감
  likesCnt: z.number(),
  viewsCnt: z.number(),
  cmmtCnt: z.number(),
  writer: z.string(),
  writerProfile: z.string().url().nullable(),
  createdAt: z.string(),
  commentList: z.any(),
  // commentList: z.array(communityDetailCommentSchema),
  // commentList: z.array(communityDetailCommentSchema).default([]),
  isLiked: z.boolean(),
  // isPopular: z.booblean(),
  isPopular: z.string().nullable(),
});
