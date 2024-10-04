import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  // const { searchParams, origin } = request.nextUrl;
  const accessToken = request.cookies.get("access_token");
  const refreshToken = request.cookies.get("refresh_token");

  // 로그인이 되어있지 않다면, null을 반환합니다.
  if (!accessToken || !refreshToken) {
    return NextResponse.json(null);
  }

  return NextResponse.json({
    user: {
      id: "1",
      email: "figma@kakao.com",
      name: "김병훈",
    },
  });
};
