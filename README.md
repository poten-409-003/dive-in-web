# 로그인

## 1. (프론트) 로그인 페이지

> `https://dive-in.co.kr/login`

로그인 페이지에서 “카카오로 로그인하기” 버튼을 누르면, 카카오 로그인 페이지로 이동합니다.

```tsx
Kakao.Auth.autorize({
  redirectUri: "https://dive-in.co.kr/api/auth/callback",
  scope: "openid",
});
```

## 2. (외부) 카카오 로그인 페이지

카카오 계정을 입력하여 로그인합니다.

카카오 로그인이 성공적으로 이루어진 경우, `redirectUri` 에 code를 파라미터로 추가하여 리다이렉트합니다.

## 3. 리다이렉트

### 3-1. (프론트) 리다이렉트 페이지

> `https://dive-in.co.kr/api/auth/callback`

```tsx
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  // code가 없는 경우, 에러
  if (!code) {
    return NextResponse.redirect(`${origin}/auth/login?error=invalid_code`);
  }

  // 1. 백엔드로 code와 redirect_uri를 전달하여, 로그인을 요청합니다. (3-2로 이동합니다)
  const url = new URL(`http://localhost:8080/login/kakao`);
  url.searchParams.append("code", code);
  url.searchParams.append("redirect_uri", `${origin}/api/auth/callback`);
  const res = await fetch(url);

  if (!res.ok) {
    return NextResponse.redirect(`${origin}/auth/login?error=failed_to_login`);
  }

  const { access_token, refresh_token } = await res.json();

  // (3-2에서 이어집니다)
  // 2. 백엔드에서 응답받은 token을 쿠키에 삽입하여, 회원가입/로그인을 완료합니다.
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
```

### 3-2. (백엔드) 로그인 페이지

> `http://localhost:8080/login/kakao?code={code}&redirect_uri={redirect_uri}`

1. `code`와 `redirect_uri`를 이용하여, `token`을 요청합니다.
2. 발급받은 `token`을 이용해 사용자 정보를 가져옵니다.
3. 사용자 정보의 이메일을 이용하여, 회원가입과 로그인 로직을 분기합니다.
   - 회원가입
     1. 사용자 정보를 Member 테이블에 저장하고, jwt 토큰을 발급합니다.
   - 로그인
     1. 이메일을 이용하여, 사용자 정보를 Member 테이블에서 불러옵니다.
4. TokenManager 테이블에 데이터를 저장합니다.
5. access_token과 refresh_token을 반환합니다.

- 프론트 코드 예시

  ```tsx
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
      return NextResponse.json(
        { error: "failed_to_get_user" },
        { status: 400 }
      );
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

  async function saveUser(user: any) {
    // ...
    return { userId: 1 };
  }

  async function issueToken(user: any) {
    // ...
    return {
      access_token: "access_token",
      refresh_token: "refresh_token",
    };
  }

  async function saveRefreshToken(userId: number, refreshToken: string) {
    // ...
  }
  ```

# 내 정보 가져오기

> `GET` `api.dive-in.co.kr/me`

- 백엔드 로직
  1. access_token 유효성 체크
     1. refresh_token 유효성 체크
  2. token의 memberId를 이용하여 DB 검색 후 반환

## 요청 (Request)

### Cookie

- access_token
- refresh_token

## 응답 (Response)

### body

```json
{
  "id": 1,
  "email": "figma@kakao.com",
  "nickname": "김병훈",
  "role": "강사"
}
```

# 로그아웃

> `POST` `api.dive-in.co.kr/logout`

- 백엔드 로직
  1. refresh_token 유효성 검증
  2. DB에서 TokenManager row 삭제

## 요청 (Request)

### body

```json
{
  "access_token": "abcd",
  "refresh_token": "zxcv"
}
```

## 응답 (Response)

없음
