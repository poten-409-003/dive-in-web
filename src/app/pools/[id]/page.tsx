import { dummySwimmingClasses, dummySwimmingPools } from "@/data/dummy";
import { ChevronLeftIcon } from "lucide-react";
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
const Overlay = dynamic(() => import("@/components/maps/Overlay"), {
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
      <div className="p-4">
        <Link href="/lessons">
          <ChevronLeftIcon className="w-6 h-6" />
        </Link>
      </div>

      <section className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
        {pool.photos.map((photo, index) => (
          <div
            key={photo}
            className="snap-center snap-always relative shrink-0 w-full h-40"
          >
            <Image
              src={photo}
              alt="수영장 사진"
              fill
              sizes="100vw"
              priority={index < 2}
              className="w-full object-cover rounded-lg shadow-xl bg-white"
            />
          </div>
        ))}
      </section>

      <section className="flex flex-col p-4">
        <div className="flex gap-2 items-center flex-wrap">
          {pool.tags.map((tag) => (
            <div
              key={tag}
              className="flex px-1 py-0.5 border border-slate-400 rounded"
            >
              <span className="text-slate-700 text-xs">{tag}</span>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold mt-2">{pool.name}</h1>

        <p className="text-sm text-slate-600 mt-2">{pool.description}</p>
      </section>

      <section className="flex flex-col gap-4 p-4">
        <h2 className="text-lg font-bold">연관 클래스</h2>

        <ul className="flex flex-col gap-4">
          {dummySwimmingClasses.map((swimmingClass) => (
            <li key={swimmingClass.id}>
              <Link href={`/lessons/${swimmingClass.id}`} className="flex">
                <Image
                  src={swimmingClass.photos[0]}
                  alt="강습 사진"
                  width={100}
                  height={100}
                  className="flex-none w-16 aspect-square rounded-lg"
                />
                <div className="flex-none flex flex-col gap-1 pl-3">
                  <ul className="flex items-center gap-1">
                    {swimmingClass.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs px-1 py-0.5 border rounded-lg"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-medium">{swimmingClass.className}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="p-4 flex flex-col gap-4">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">위치</h2>
        </div>
        <KakaoMap
          center={{
            lat: pool.latitude,
            lng: pool.longitude,
          }}
        >
          <Marker lat={pool.latitude} lng={pool.longitude} />
          <Overlay
            lat={pool.latitude}
            lng={pool.longitude}
            name={pool.name}
            address={pool.location}
            kakaoUrl="/"
            naverUrl="/"
          />
        </KakaoMap>
        <div className="flex flex-col gap-1">
          <p className="text-slate-700 font-bold">{pool.name}</p>
          <p className="text-sm text-slate-500">{pool.location}</p>
        </div>
      </section>
    </div>
  );
};

export default PoolPage;
