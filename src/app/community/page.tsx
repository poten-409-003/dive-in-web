import Link from "next/link";

const Page = async () => {
  return (
    <div>
      <h1>로그인 페이지로 리다이렉트 합니다</h1>
      <Link href="/auth/login?next=/community">로그인 페이지로 이동</Link>
    </div>
  );
};

export default Page;
