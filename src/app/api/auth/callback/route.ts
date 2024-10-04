import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/auth/login?error=invalid_code`);
  }

  // const url = new URL(`${origin}/api/auth/login`);
  const url = new URL(`http://localhost:8080/login/kakao`);
  url.searchParams.append("code", code);
  url.searchParams.append("redirect_uri", `${origin}/api/auth/callback`);

  const res = await fetch(url);

  if (!res.ok) {
    return NextResponse.redirect(`${origin}/auth/login?error=failed_to_login`);
  }

  const { access_token, refresh_token } = await res.json();

  return NextResponse.redirect(`${origin}`, {
    headers: [
      [
        "Set-Cookie",
        `access_token=${access_token}; Path=/; HttpOnly; SameSite=Strict`,
      ],
      [
        "Set-Cookie",
        `refresh_token=${refresh_token}; Path=/; HttpOnly; SameSite=Strict`,
      ],
    ],
  });
}
