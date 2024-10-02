import DetailPagePhotoSlider from "@/app/_components/PhotoSlider";
import ShareButton from "@/app/_components/ShareButton";
import LessonChip from "@/components/ui/Chip";
import { dummySwimmingClasses } from "@/data/dummy";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Map = dynamic(() => import("@/components/maps/KakaoMap"), { ssr: false });
const Marker = dynamic(() => import("@/components/maps/Marker"), {
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
      <div className="flex items-center justify-between px-1">
        <Link href="/lessons" className="flex p-3">
          <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>
        <ShareButton />
      </div>

      <div className="relative mb-4">
        <DetailPagePhotoSlider imageUrls={lesson.photos} alt="수업 사진" />
      </div>

      <section className="flex flex-col gap-3 px-4 mb-6">
        <div className="flex items-center justify-between">
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

          <div className="flex items-center gap-1">
            <LessonChip label={lesson.level} />
            {lesson.tags.map((tag) => (
              <LessonChip key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900">
            {lesson.className}
          </h1>

          <p className="text-sm text-gray-700 line-clamp-2">
            {lesson.description}
          </p>
        </div>

        <div className="flex items-center justify-start gap-1">
          <p className="font-medium text-gray-900">
            {lesson.pricePerSession.toLocaleString()}원
          </p>
          <p className="text-gray-500">1회</p>
        </div>
      </section>

      <section className="flex flex-col gap-2 px-4 pb-6 border-b border-gray-200">
        <h2 className="font-bold text-gray-700">신청하기</h2>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <Link
            href="https://www.instagram.com/kim.gam.ja/"
            className="flex-none flex items-center gap-2 bg-gray-100 rounded-lg py-3 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icon/instagram.png"
              alt="인스타그램"
              width={24}
              height={24}
            />
            <p className="text-slate-700 text-sm font-medium">인스타그램</p>
          </Link>
          <Link
            href="https://www.instagram.com/kim.gam.ja/"
            className="flex-none flex items-center gap-2 bg-gray-100 rounded-lg py-3 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icon/kakao.png"
              alt="카카오톡"
              width={24}
              height={24}
            />
            <p className="text-slate-700 text-sm font-medium">오픈 카카오톡</p>
          </Link>
          <Link
            href="https://www.instagram.com/kim.gam.ja/"
            className="flex-none flex items-center gap-2 bg-gray-100 rounded-lg py-3 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icon/naver-cafe-c.png"
              alt="네이버 카페"
              width={24}
              height={24}
            />
            <p className="text-slate-700 text-sm font-medium">네이버 카페</p>
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg">
          <h2 className="font-bold text-gray-700">클래스 상세 설명</h2>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold text-gray-700">위치</h3>
              <p className="text-sm text-gray-700">안양 신성고등학교 수영장</p>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold text-gray-700">시간</h3>
              <p className="text-sm text-gray-700">오전 8:00 ~ 10:00</p>
            </div>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold text-gray-700">모집</h3>
              <p className="text-sm text-gray-700">8명</p>
            </div>
          </div>

          <p className="flex text-sm text-gray-700">{lesson.description}</p>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-700">클래스 위치</h2>
            <Link href="/pools/1" className="flex p-1">
              <ChevronRightIcon className="w-4 h-4 text-gray-900" />
            </Link>
          </div>

          <Map
            center={{
              lat: lesson.latitude,
              lng: lesson.longitude,
            }}
          >
            <Marker lat={lesson.latitude} lng={lesson.longitude} />
          </Map>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-700">{lesson.location}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LessonPage;
