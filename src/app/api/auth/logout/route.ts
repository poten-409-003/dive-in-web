import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { origin } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (accessToken && refreshToken) {
    try {
      const url = new URL("https://api.dive-in.co.kr/logout");
      await fetch(url.toString(), {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "X-Refresh-Token": refreshToken,
        },
      });

      revalidateTag("user");
    } catch (error) {
      console.error(error);
    }
  }

  revalidatePath("/");

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
