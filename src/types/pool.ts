import { poolDetailSchema, poolSchema } from "@/schemas/pools";
import { z } from "zod";

export type Pool = z.infer<typeof poolSchema>;
export type PoolDetail = z.infer<typeof poolDetailSchema>;
