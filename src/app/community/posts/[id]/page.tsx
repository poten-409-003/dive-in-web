import { getCommunity } from "@/api/server/community";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VscKebabVertical } from "react-icons/vsc";
import WriterProfile from "../../_components/WriterProfile";
import { TiHeartOutline } from "react-icons/ti";
import { RiShare2Line } from "react-icons/ri";

const CommunityPage = async ({ params }: { params: { id: string } }) => {
  const CommunityId = Number(params.id);
  const community = await getCommunity(CommunityId);

  if (!community) {
    notFound();
  }

  return (
    // 상단Nav
    <div className="flex flex-col pb-10 relative h-full">
      <div className="flex items-center justify-between py-1 px-1">
        <Link href="/community" className="flex p-3">
          <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>

        <button type="button" className="flex p-3">
          <VscKebabVertical className="w-6  h-6 text-gray-900" />
        </button>
      </div>

      {/* 태그 */}
      <div
        className={`mx-4 text-label_sb px-1.5 py-1 rounded bg-chip-1 text-chip-1-foreground inline-block w-fit`}
      >
        <p>{community.name}</p>
      </div>

      {/* 작성자 */}
      <div className="flex flex-row items-start px-4 mt-3">
        <WriterProfile
          // avatar={community.userImageUrl}
          // name={community.userName}
          width={36}
          height={36}
          avatar=""
          name=""
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-700">
            {/* {community.userName || "작성자"} */}
            작성자이름수정하기
          </p>

          <div className="flex gap-2 text-sm text-gray-500">
            <span className="text-sm text-gray-500 ml-auto">
              {community.date}
            </span>
            <span className="text-sm text-gray-500 ml-auto">
              조회{community.views}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold">{community.title}</h1>
        <p className="text-gray-700 mt-4 whitespace-pre-line">{community.content}</p>
      </div>

      <div className="flex justify-center items-center gap-4">

        <div className="flex flex-row justify-center items-center gap-1 flex-1">
          <TiHeartOutline className="w-5 h-5 text-gray-700" />
          <p className="text-gray-700">{community.likes}</p>
        </div>
        <div className="flex justify-center items-center gap-1 flex-1">
          <RiShare2Line className="w-5 h-5 text-gray-700" />
          <p className="text-gray-500"></p>
        </div>

      </div>

    </div>
  );
};

export default CommunityPage;
