import { poolDetailResponse, poolsResponse } from "@/data/dummy";
import { poolDetailSchema, poolSchema } from "@/schemas/pools";
import { camel, mapKeys } from "radash";

export const getPools = async () => {
  const response = poolsResponse;

  return poolSchema.array().parse(response);
};

export const getPool = async (id: number) => {
  console.log("getPool", id);
  const response = poolDetailResponse;

  const transformedResponse = mapKeys(response, camel);
  return poolDetailSchema.parse(transformedResponse);
};
