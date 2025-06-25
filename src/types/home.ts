import { z } from "zod";
import { homeResponseScheme } from "@/schemas/home";

//이 두줄이면 zod랑 일치하게 됨
export type HomeResponseProps = z.infer<typeof homeResponseScheme>;
export type HomeProps = HomeResponseProps["data"];

// export type topViewLessionListProps = {
//   id: number;
//   instructorName: string;
//   instructorImgUrl: string;
//   keyword: string;
//   lessonName: string;
//   lessonImgUrl: string;
//   level: string;
//   price: string;
//   viewCnt: number;
// };

// export type newLessonListProps = {
//   id: number;
//   instructorName: string;
//   instructorImgUrl: { repImage: boolean; imageUrl: string } | null;
//   keyword: string;
//   lessonName: string;
//   lessonImgUrl: string;
//   level: string;
//   price: string;
//   viewCnt: number;
// };

// export type topViewPostListProps = {
//   postId: number;
//   categoryName: string;
//   title: string;
//   content: string;
//   image: { repImage: boolean; imageUrl: string } | null;
//   likesCnt: number;
//   cmmtCnt: number;
//   viewCnt: number;
//   writer: string;
//   writerProfile: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export type newPostListProps = {
//   postId: number;
//   categoryName: string;
//   title: string;
//   content: string;
//   image: { repImage: boolean; imageUrl: string } | null;
//   likesCnt: number;
//   cmmtCnt: number;
//   viewCnt: number;
//   writer: string;
//   writerProfile: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export type competitionPostListProps = {
//   postId: number;
//   title: string;
//   content: string;
// };

// export type HomeResponseProps = {
//   success: boolean;
//   message: string | null;
//   data: {
//     topViewLessionList: topViewLessionListProps[];
//         newLessonList: newLessonListProps[],
//         topViewPostList: topViewPostListProps[],
//         newPostList: newPostListProps[],
//         competitionPostList: competitionPostListProps[],
//   }
// };