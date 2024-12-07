import { getCommunity } from "@/api/server/communities";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import Link from "next/link";
import { notFound } from "next/navigation";


const CommunityPage = async ({params}: { params: {id: string} }) => {
  const CommunityId = Number(params.id);
  const community = await getCommunity(CommunityId);

  if(!community) {
    notFound();
  }

  return (
    <div className="flex flex-col pb-10">
      <div className="flex items-center juftify-between px-1">
        <Link href="/communities" className="flex p-3">
          <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>
      </div>
    </div>


  );
}

export default CommunityPage;