import { poolDetailSchema } from "@/schemas/pools";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const apiResponse = await fetch(`https://api.dive-in.co.kr/pools/1`);

    if (!apiResponse.ok) {
      return NextResponse.error();
    }

    const body = await apiResponse.json();

    console.log("log: api Route getPool -> body", body);

    const pool = poolDetailSchema.parse(body.data);

    return NextResponse.json({ data: pool });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
