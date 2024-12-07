import { getCommunity } from "@/api/server/communities";
import { notFound } from "next/navigation";


const CommunityPage = async ({params}: { params: {id: string} }) => {
  const CommunityId = Number(params.id);
  const community = await getCommunity(CommunityId);

  if(!community) {
    notFound();
  }
}

export default CommunityPage;