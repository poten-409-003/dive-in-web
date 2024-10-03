import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { signOut } from "./_actions/signout";

const MyPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>My Page</h1>
      <p>{user.user_metadata.name}</p>
      <p>{user.user_metadata.email}</p>
      <Image
        src={user.user_metadata.avatar_url}
        width={100}
        height={100}
        alt={user.user_metadata.name}
      />
      <form action={signOut}>
        <button>로그아웃</button>
      </form>
    </div>
  );
};

export default MyPage;
