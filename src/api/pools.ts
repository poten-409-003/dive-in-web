import { poolDetailResponse } from "@/data/dummy";
import { poolDetailSchema, poolSchema } from "@/schemas/pools";
import { camel, mapKeys } from "radash";

export const getPools = async () => {
  const response = await fetch("https://api.dive-in.co.kr/pools");

  if (!response.ok) {
    return [];
  }

  const body = await response.json();

  return poolSchema.array().parse(body.data);
};

export const getPool = async (id: number) => {
  console.log("getPool", id);
  const response = poolDetailResponse;

  const transformedResponse = mapKeys(response, camel);
  return poolDetailSchema.parse(transformedResponse);
};
