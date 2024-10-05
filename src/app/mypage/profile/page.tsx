import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import Link from "next/link";
import EditProfileForm from "./_components/EditProfileForm";
import { getUser } from "@/actions/user";
import { redirect } from "next/navigation";
import LogoutButton from "./_components/LogoutButton";

const ProfilePage = async () => {
  const user = await getUser();

  if (!user) {
    return redirect("/auth/login");
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 pt-10 pb-5">
        <Link href="/mypage">
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
        <h1 className="text-heading_2">프로필 관리</h1>
      </div>

      <EditProfileForm user={user} />

      <div className="mt-auto mb-10 flex items-center justify-center gap-0.5">
        <button className="flex items-center justify-center p-3 h-10 text-body_sm text-gray-500">
          회원 탈퇴
        </button>
        <span className="text-body_sm text-gray-500">|</span>
        <LogoutButton />
      </div>
    </div>
  );
};

export default ProfilePage;
