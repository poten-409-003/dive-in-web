import { NextRequest, NextResponse } from "next/server";

const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!;
const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET!;

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const redirectUri = searchParams.get("redirect_uri");

  // 1. code가 없다면, 400 에러를 반환합니다.
  if (!code || !redirectUri) {
    return NextResponse.json({ error: "invalid_code" }, { status: 400 });
  }

  // 2. code를 이용해 Kakao API로부터 access_token을 발급받습니다.
  const tokenResponse = await getAccessToken(code, redirectUri);

  if (!tokenResponse.ok) {
    return NextResponse.json({ error: "failed_to_login" }, { status: 400 });
  }

  const token = await tokenResponse.json();

  // 3. 발급받은 토큰을 이용해 사용자 정보를 가져옵니다.
  const userResponse = await getUser(token.access_token);

  if (!userResponse.ok) {
    return NextResponse.json({ error: "failed_to_get_user" }, { status: 400 });
  }

  const user = await userResponse.json();

  // 4. 사용자 정보를 DB에 저장하고, jwt 토큰을 발급합니다.
  const { userId } = await saveUser(user);
  const { access_token, refresh_token } = await issueToken(user);

  // 5. DB에 refresh_token을 저장합니다.
  await saveRefreshToken(userId, refresh_token);

  // 6. 응답에 access_token과 refresh_token을 담아 반환합니다.
  return NextResponse.json({ access_token, refresh_token });
};

async function getAccessToken(code: string, redirectUri: string) {
  const url = new URL("https://kauth.kakao.com/oauth/token");
  url.searchParams.append("grant_type", "authorization_code");
  url.searchParams.append("client_id", REST_API_KEY);
  url.searchParams.append("redirect_uri", redirectUri);
  url.searchParams.append("code", code);
  url.searchParams.append("client_secret", KAKAO_CLIENT_SECRET);

  return fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

async function getUser(accessToken: string) {
  return fetch("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

async function saveUser(user: Record<string, string>) {
  // ...
  console.log(user);
  return { userId: 1 };
}

async function issueToken(user: Record<string, string>) {
  // ...
  console.log(user);
  return {
    access_token: "access_token",
    refresh_token: "refresh_token",
  };
}

async function saveRefreshToken(userId: number, refreshToken: string) {
  // ...
  console.log(userId, refreshToken);
}
