import { getCommunity } from "@/api/server/community";
import { notFound } from "next/navigation";
import ClientCommunityPage from "./clientPage";

const CommunityPage = async ({ params }: { params: { id: string } }) => {
  const CommunityId = Number(params.id);
  const community = await getCommunity(CommunityId);

  if (!community) {
    notFound();
  }

  return (<ClientCommunityPage community={community} />);
};

export default CommunityPage;
