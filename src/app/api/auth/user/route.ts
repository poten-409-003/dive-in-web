import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
  const { origin } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (accessToken && refreshToken) {
    try {
      const url = new URL("https://api.dive-in.co.kr/user/profile");
      const res = await fetch(url.toString(), {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "X-Refresh-Token": refreshToken,
        },
      });

      if (!res.ok) {
        throw new Error(await res.json());
      }
    } catch (error) {
      console.error(error);
    }
  }

  return NextResponse.redirect(`${origin}`, {
    headers: [
      [
        "Set-Cookie",
        `accessToken=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`,
      ],
      [
        "Set-Cookie",
        `refreshToken=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`,
      ],
    ],
  });
};
