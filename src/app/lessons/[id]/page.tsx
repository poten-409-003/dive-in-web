import DetailPagePhotoSlider from "@/app/_components/PhotoSlider";
import InstagramIcon from "@/components/icons/InstagramIcon";
import KakaoTalkIcon from "@/components/icons/KakaoTalkIcon";
import { dummySwimmingClasses } from "@/data/dummy";
import { ChevronLeftIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Map = dynamic(() => import("@/components/maps/KakaoMap"), { ssr: false });
const Marker = dynamic(() => import("@/components/maps/Marker"), {
  ssr: false,
});
const Overlay = dynamic(() => import("@/components/maps/Overlay"), {
  ssr: false,
});

const LessonPage = ({ params }: { params: { id: string } }) => {
  const LessonId = Number(params.id);
  const lesson = dummySwimmingClasses.find((lesson) => lesson.id === LessonId);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <div className="relative">
        <Link href="/lessons" className="absolute z-10 top-4 left-4">
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </Link>
        <DetailPagePhotoSlider imageUrls={lesson.photos} alt="수업 사진" />
      </div>

      <section className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-2">
          <Image
            src={lesson.photos[0]}
            alt="로고 이미지"
            width={24}
            height={24}
            priority
            className="flex-none w-6 h-6 rounded-full"
          />
          <p className="text-sm text-gray-600">수달상회</p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900">
            {lesson.className}
          </h1>

          <p className="text-sm text-gray-500 line-clamp-2">
            {lesson.description}
          </p>
        </div>

        <div className="flex items-center justify-end gap-1">
          <p className="text-sm text-gray-900">
            {lesson.pricePerSession.toLocaleString()}원
          </p>
          <p className="text-sm text-gray-500">1회</p>
        </div>
      </section>

      <section className="flex flex-col gap-2 px-4 pb-4 border-b border-gray-200">
        <h2 className="font-bold text-gray-600">신청하기</h2>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <Link
            href="https://www.instagram.com/kim.gam.ja/"
            className="flex-none flex items-center gap-2 bg-gray-100 rounded-lg py-3 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-6 h-6" />
            <p className="text-slate-700 text-sm font-medium">인스타그램</p>
          </Link>
          <Link
            href="https://www.instagram.com/kim.gam.ja/"
            className="flex-none flex items-center gap-2 bg-gray-100 rounded-lg py-3 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <KakaoTalkIcon className="w-6 h-6" />
            <p className="text-slate-700 text-sm font-medium">오픈 카카오톡</p>
          </Link>
          <Link
            href="https://www.instagram.com/kim.gam.ja/"
            className="flex-none flex items-center gap-2 bg-gray-100 rounded-lg py-3 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <KakaoTalkIcon className="w-6 h-6" />
            <p className="text-slate-700 text-sm font-medium">네이버 카페</p>
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg">
          <h2 className="font-bold text-gray-600">클래스 상세 설명</h2>
          <p className="flex text-sm text-gray-600">{lesson.description}</p>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg">
          <h2 className="font-bold text-gray-600">클래스 위치</h2>

          <Map
            center={{
              lat: lesson.latitude,
              lng: lesson.longitude,
            }}
          >
            <Marker lat={lesson.latitude} lng={lesson.longitude} />
            <Overlay
              lat={lesson.latitude}
              lng={lesson.longitude}
              name={lesson.poolName}
              address={lesson.location}
              kakaoUrl="/"
              naverUrl="/"
            />
          </Map>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-600">{lesson.location}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LessonPage;
