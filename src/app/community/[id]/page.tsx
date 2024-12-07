import { getCommunity } from "@/api/server/communities";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VscKebabVertical } from "react-icons/vsc";

const CommunityPage = async ({ params }: { params: { id: string } }) => {
  const CommunityId = Number(params.id);
  const community = await getCommunity(CommunityId);

  if (!community) {
    notFound();
  }

  return (
    <div className="flex flex-col pb-10 relative h-full">
      <div className="flex items-center justify-between py-1 px-1">
        <Link href="/community" className="flex p-3">
          <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>

        <button type="submit" form="createPostForm" className="flex p-3">
          <VscKebabVertical className="w-6 h-6 text-gray-400 hover:text-blue-900" />
        </button>
      </div>


      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold">{community.name}</h1>
        <p className="text-gray-700 mt-4">{community.content}</p>
      </div>


    </div>
  );
};

export default CommunityPage;
