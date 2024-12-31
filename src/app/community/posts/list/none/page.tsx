import { getCommunities } from "@/api/server/community";
import Link from "next/link";
import Image from "next/image";
import CommunitiesClient from "./clientPage";

export default async function CommunityPage() {
  const nonePosts = await getCommunities("none", 0);
  // const popularPosts = await getCommunities("popular", 0);
  // const competitionPosts = await getCommunities("competition", 0);
  // const poolPosts = await getCommunities("pool", 0);
  // const goodsPosts = await getCommunities("goods", 0);
  // const communicationPosts = await getCommunities("communication", 0);

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
          <p className="text-body_lb text-gray-500">{nonePosts.length}</p>
        </div>

        <div>
          <CommunitiesClient nonePosts={nonePosts} />
        </div>
      </section>
    </div>
  );
}