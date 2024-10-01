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
      <div className="flex p-4">
        <Link href="/lessons">
          <ChevronLeftIcon className="w-6 h-6" />
        </Link>
      </div>

      <DetailPagePhotoSlider imageUrls={lesson.photos} alt="수업 사진" />

      <section className="flex flex-col p-4">
        <div className="flex gap-2 items-center flex-wrap">
          {lesson.tags.map((tag) => (
            <div
              key={tag}
              className="flex px-1 py-0.5 border border-slate-400 rounded"
            >
              <span className="text-slate-700 text-xs">{tag}</span>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold mt-2">{lesson.className}</h1>

        <p className="text-sm text-slate-600 mt-2">{lesson.description}</p>
      </section>

      <section className="flex flex-col p-4">
        <p>클래스 소개 글(상세 설명)</p>
      </section>

      <section className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">수업료</h2>
        <div className="flex flex-col gap-1">
          <p className="text-slate-700 font-bold">
            {lesson.pricePerSession.toLocaleString()}원
          </p>
          <p className="text-sm text-slate-500">1회당 수업료</p>
        </div>
      </section>

      <section className="p-4 flex flex-col gap-4">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">클래스 위치</h2>
        </div>
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
          <p className="text-slate-700 font-bold">{lesson.poolName}</p>
          <p className="text-sm text-slate-500">{lesson.location}</p>
        </div>
      </section>

      <section className="p-4 flex flex-col gap-4">
        <h2 className="text-lg font-bold">클래스 신청하기</h2>
        <div className="flex flex-col gap-4">
          <Link
            href="https://www.instagram.com/kim.gam.ja/"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-6 h-6" />
            <p className="text-slate-700 text-sm font-medium">
              인스타그램 프로필 바로가기
            </p>
          </Link>
          <Link
            href="https://www.instagram.com/kim.gam.ja/"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <KakaoTalkIcon className="w-6 h-6" />
            <p className="text-slate-700 text-sm font-medium">
              오픈 카카오톡 바로가기
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LessonPage;
