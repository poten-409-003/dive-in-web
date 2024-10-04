import { NextResponse } from "next/server";

// const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!;
// const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET!;

// const getTokenByCode = async ({
//   code,
//   redirectUri,
// }: {
//   code: string;
//   redirectUri: string;
// }): Promise<GetTokenResponse> => {
//   const response = await fetch(
//     `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${redirectUri}&code=${code}&client_secret=${KAKAO_CLIENT_SECRET}`,
//     {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to get token from Kakao API");
//   }

//   return response.json();
// };

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  const url = new URL(`${origin}/api/login/kakao`);
  url.searchParams.append("code", code!);

  await fetch(url);

  return NextResponse.redirect(`${origin}`);

  // const state = searchParams.get("state") || "";
  // const next = state.split("next=")[1] || "/";

  // if (code) {
  //   const tokenResponse = await getTokenByCode({
  //     code,
  //     redirectUri: `${origin}/auth/callback`,
  //   });

  //   const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer
  //   const isLocalEnv = process.env.NODE_ENV === "development";
  //   let redirectUri = `${origin}${next}`;

  //   if (isLocalEnv) {
  //     redirectUri = `${origin}${next}`;
  //   } else if (forwardedHost) {
  //     redirectUri = `https://${forwardedHost}${next}`;
  //   } else {
  //     redirectUri = `${origin}${next}`;
  //   }

  //   revalidatePath("/");

  //   return NextResponse.redirect(redirectUri, {
  //     headers: [
  //       [
  //         "Set-Cookie",
  //         `access_token=${tokenResponse.access_token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
  //       ],
  //       [
  //         "Set-Cookie",
  //         `refresh_token=${tokenResponse.refresh_token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
  //       ],
  //     ],
  //   });
  // }

  // return the user to an error page with instructions
  // return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
