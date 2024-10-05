"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!accessToken || !refreshToken) {
    return null;
  }

  try {
    const userResponse = await fetch("https://api.dive-in.co.kr/user/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Refresh-Token": refreshToken,
      },
    });

    if (!userResponse.ok) {
      const body = await userResponse.json();
      console.error(body);
      return null;
    }

    const body = await userResponse.json();

    return body.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateUser = async (formData: FormData) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!accessToken || !refreshToken) {
    return null;
  }

  try {
    const userResponse = await fetch("https://api.dive-in.co.kr/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Refresh-Token": refreshToken,
      },
      body: formData,
    });

    if (!userResponse.ok) {
      const body = await userResponse.json();
      console.error(body);
      return null;
    }

    const body = await userResponse.json();

    revalidatePath("/");
    return body.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
