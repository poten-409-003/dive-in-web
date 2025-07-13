// export type SearchResult = {
//   id: number;
//   categoryName: string;
//   title: string;
//   address?: string;
//   // icon?: React.ReactNode;
// }

import { searchSchema } from "@/schemas/search";
import { z } from "zod";

export type Search = z.infer<typeof searchSchema>;
// export type SearchDetail = z.infer<typeof searchDetailSchema>;
