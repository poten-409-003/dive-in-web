import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;

  try {
    const apiResponse = await fetch(`https://api.dive-in.co.kr/pools/${id}`);

    if (!apiResponse.ok) {
      return NextResponse.error();
    }

    const body = await apiResponse.json();

    console.log("log: api Route getPool -> body", body);

    // const pool = poolDetailSchema.parse(body.data);

    return NextResponse.json(body.data);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
