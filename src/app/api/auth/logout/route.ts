import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { origin } = request.nextUrl;

  const accessToken = request.cookies.get("access_token");
  const refreshToken = request.cookies.get("refresh_token");

  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(`${origin}`);
  }

  try {
    const url = new URL("https://api.dive-in.co.kr/logout");
    await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: accessToken?.value,
        refresh_token: refreshToken?.value,
      }),
    });
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json(null, {
    headers: [
      [
        "Set-Cookie",
        `access_token=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`,
      ],
      [
        "Set-Cookie",
        `refresh_token=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`,
      ],
    ],
  });
};
