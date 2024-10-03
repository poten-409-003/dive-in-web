import { getPool } from "@/api/pools";
import DetailPagePhotoSlider from "@/app/_components/PhotoSlider";
import ShareButton from "@/app/_components/ShareButton";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import LessonChip from "@/components/ui/Chip";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import RelativeLessonSection from "./_components/RelativeLessonSection";

const KakaoMap = dynamic(() => import("@/components/maps/KakaoMap"), {
  ssr: false,
});
const Marker = dynamic(() => import("@/components/maps/Marker"), {
  ssr: false,
});

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const poolId = Number(params.id);

  if (isNaN(poolId)) {
    redirect("/pools");
  }

  const pool = await getPool(poolId);

  if (!pool) {
    notFound();
  }

  return {
    title: `${pool.poolName} - 수영장 정보 | Dive In`,
    description: `${pool.region}에 위치한 ${pool.poolName}. Dive In에서 수영장 정보를 확인하고 강습을 찾아보세요!`,
  };
};

const PoolPage = async ({ params }: Props) => {
  const poolId = Number(params.id);
  const pool = await getPool(poolId);

  if (!pool) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-1">
        <Link href="/pools" className="p-3">
          <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>
        <ShareButton />
      </div>

      <DetailPagePhotoSlider
        imageUrls={pool.poolImage.map(({ imageUrl }) => imageUrl)}
        alt="수영장 사진"
      />

      <section className="flex flex-col gap-6 py-4 pb-10">
        <div className="flex flex-col gap-3 px-4">
          <div className="flex gap-2 items-center flex-wrap">
            <LessonChip label={pool.region} />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-heading_2">{pool.poolName}</h1>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  <MapPinIcon className="w-4 h-4 text-gray-600" />
                  <h3 className="text-body_sb text-gray-600">위치</h3>
                </div>
                <p className="text-body_sr text-gray-600">
                  안양 신성고등학교 수영장
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-0.5">
                  <PhoneIcon className="w-4 h-4 text-gray-600" />
                  <h3 className="text-body_sb text-gray-600">전화</h3>
                </div>
                <p className="text-body_sr text-gray-600">02-350-0000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-200" />

        <div className="flex flex-col gap-6 px-4">
          <RelativeLessonSection lessons={pool.lesson} />

          <div className="flex flex-col bg-gray-100 rounded-lg">
            <div className="flex items-center justify-between pl-4 h-12">
              <h2 className="text-body_bb text-gray-700">수영장 위치</h2>
            </div>

            <div className="px-4">
              <KakaoMap
                center={{
                  lat: pool.latitude,
                  lng: pool.longitude,
                }}
              >
                <Marker lat={pool.latitude} lng={pool.longitude} />
              </KakaoMap>
            </div>

            <div className="flex flex-col gap-1 pt-2 px-4 pb-4">
              <p className="text-body_sr text-gray-700">{pool.poolAddress}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoolPage;
