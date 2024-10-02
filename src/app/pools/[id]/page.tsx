import DetailPagePhotoSlider from "@/app/_components/PhotoSlider";
import ShareButton from "@/app/_components/ShareButton";
import LessonChip from "@/components/ui/Chip";
import { dummySwimmingClasses, dummySwimmingPools } from "@/data/dummy";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

const KakaoMap = dynamic(() => import("@/components/maps/KakaoMap"), {
  ssr: false,
});
const Marker = dynamic(() => import("@/components/maps/Marker"), {
  ssr: false,
});

type Props = {
  params: { id: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const poolId = Number(params.id);

  if (isNaN(poolId)) {
    redirect("/pools");
  }

  const pool = dummySwimmingPools.find((pool) => pool.id === poolId);

  if (!pool) {
    notFound();
  }

  return {
    title: `${pool.name} - 수영장 정보 | Dive In`,
    description: `${pool.location}에 위치한 ${pool.name}. Dive In에서 수영장 정보를 확인하고 강습을 찾아보세요!`,
  };
};

const PoolPage = ({ params }: Props) => {
  const poolId = Number(params.id);
  const pool = dummySwimmingPools.find((pool) => pool.id === poolId);

  if (!pool) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-1">
        <Link href="/pools">
          <ChevronLeftIcon className="w-6 h-6" />
        </Link>
        <ShareButton />
      </div>

      <DetailPagePhotoSlider imageUrls={pool.photos} alt="수영장 사진" />

      <section className="flex flex-col gap-3 px-4 pb-6 mt-4 mb-6 border-b border-gray-200">
        <div className="flex gap-2 items-center flex-wrap">
          <LessonChip label={pool.location} />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{pool.name}</h1>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold text-gray-700">위치</h3>
              <p className="text-sm text-gray-700">안양 신성고등학교 수영장</p>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold text-gray-700">전화</h3>
              <p className="text-sm text-gray-700">02-350-0000</p>
            </div>
          </div>

          <p className="text-sm text-slate-600">{pool.description}</p>
        </div>
      </section>

      <section className="flex flex-col gap-6 px-4 pb-10">
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg">
          <h2 className="font-bold text-gray-700">연관 클래스</h2>

          <ul className="flex flex-col gap-4">
            {dummySwimmingClasses.map((swimmingClass) => (
              <li key={swimmingClass.id}>
                <Link
                  href={`/lessons/${swimmingClass.id}`}
                  className="flex items-center"
                >
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <LessonChip label={swimmingClass.level} />
                      {swimmingClass.tags.map((tag) => (
                        <LessonChip key={tag} label={tag} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">
                      {swimmingClass.className}
                    </p>
                  </div>

                  <div className="flex p-2">
                    <ChevronRightIcon className="w-4 h-4" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-700">수영장 위치</h2>
            <Link href="/pools/1" className="flex p-1">
              <ChevronRightIcon className="w-4 h-4 text-gray-900" />
            </Link>
          </div>

          <KakaoMap
            center={{
              lat: pool.latitude,
              lng: pool.longitude,
            }}
          >
            <Marker lat={pool.latitude} lng={pool.longitude} />
          </KakaoMap>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-slate-500">{pool.location}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoolPage;
