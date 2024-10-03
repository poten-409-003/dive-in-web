import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  params: Record<string, string>;
  children: ReactNode;
};

const Layout = async ({ params, children }: Props) => {
  console.log(params);

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login?next=/mypage");
  }

  return <>{children}</>;
};

export default Layout;
