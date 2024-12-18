import { getCommunities } from "@/api/server/community";
import Link from "next/link";
import Image from "next/image";
import CommunitiesClient from "./clientPage";

const dummyCommunities = [
  { id: 1, name: "전체", title: "제목1", content: "이것은 전체 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
  { id: 2, name: "인기글", title: "제목2", content: "이것은 인기글 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
  { id: 3, name: "소통해요", title: "제목3", content: "이것은 소통해요 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
  { id: 4, name: "수영장", title: "제목4", content: "이것은 수영장 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
  { id: 5, name: "수영물품", title: "수모 사고싶은데", content: "수모 브랜드 추천해주세요 얼른 빨리요 지금 당장", views: 21, likes: 13, comments: 5, date: "2024.10.27"},
  { id: 6, name: "수영대회", title: "제목5", content: "이것은 수영대회 카테고리의 게시글입니다.", views: 0, likes: 0, comments: 0, date: "2024.10.27"},
];

export default async function CommunityPage() {
  const communities = await getCommunities();

  return (
    <div className="flex flex-col">
      <header className="flex gap-2 pt-4 px-4">
        <div className="flex items-center gap-2">
          <Image
            alt="로고"
            src="/image/logo_o.png"
            width={68}
            height={16}
            className="h-4 w-[68px] object-cover"
          />
        </div>
      </header>

      <section className="flex flex-col">
        <div className="flex items-center gap-2 pt-6 px-4 pb-5">
          <h2 className="text-heading_2">소통해요</h2>
          <p className="text-body_lb text-gray-500">{communities.length}</p>
        </div>

        <div>
          <CommunitiesClient communities={dummyCommunities} />
        </div>
      </section>
    </div>
  );
}

//---------------------------------------------------------------
// import Image from "next/image";

// const Page = async () => {
//   return (
//     <div className="h-full flex flex-col items-center justify-center">
//       <Image
//         alt="로고"
//         src="/image/logo_g.png"
//         width={120}
//         height={120}
//         priority
//         className="w-[120px] h-[120px]"
//       />
//       <span className="text-body_bm text-gray-600">
//         이 페이지는 준비중입니다.
//       </span>
//     </div>
//   );
// };

// export default Page;
