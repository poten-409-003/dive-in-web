import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signOut = async () => {
  "use server";
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (!error) {
    revalidatePath("/");
    redirect("/");
  }
};
