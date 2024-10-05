import { getLesson } from "@/api/server/lessons";
import InstructorProfile from "@/app/_components/InstructorProfile";
import DetailPagePhotoSlider from "@/app/_components/PhotoSlider";
import ShareButton from "@/app/_components/ShareButton";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import LessonChip from "@/components/ui/Chip";
import { MapPinIcon, TimerIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Map = dynamic(() => import("@/components/maps/KakaoMap"), { ssr: false });
const Marker = dynamic(() => import("@/components/maps/Marker"), {
  ssr: false,
});

const LessonPage = async ({ params }: { params: { id: string } }) => {
  const LessonId = Number(params.id);
  const lesson = await getLesson(LessonId);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="flex flex-col pb-10">
      <div className="flex items-center justify-between px-1">
        <Link href="/lessons" className="flex p-3">
          <ArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </Link>
        <ShareButton />
      </div>

      <div className="relative mb-4">
        <DetailPagePhotoSlider imageUrls={lesson.images} alt="수업 사진" />
      </div>

      <section className="flex flex-col gap-3 px-4 mb-6">
        <div className="flex items-center justify-between">
          <InstructorProfile
            avatar={lesson.instructorLogo}
            name={lesson.instructorName}
          />

          <div className="flex items-center gap-1">
            <LessonChip label={lesson.level} />
            {lesson.tags.split(",").map((tag) => (
              <LessonChip key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-heading_2 text-gray-900">{lesson.lessonName}</h1>

          <p className="text-sm text-gray-700 line-clamp-2">
            {lesson.description}
          </p>
        </div>

        {lesson.price && (
          <div className="flex items-center justify-start gap-1">
            <p className="text-body_bm text-gray-900">
              {lesson.price.toLocaleString()}원
            </p>
            <p className="text-body_br text-gray-500">{lesson.times}회</p>
          </div>
        )}
      </section>

      <section className="flex flex-col gap-2 px-4 pb-6 border-b border-gray-200">
        <h2 className="text-body_bb text-gray-700">신청하기</h2>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {lesson.applyLink.map((link) => {
            if (link.type === "kakao") {
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  className="flex-none flex items-center gap-2 bg-gray-200 rounded-lg py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icon/kakao.png"
                    alt="카카오톡"
                    width={24}
                    height={24}
                  />
                  <p className="text-slate-800 text-body_sm">오픈 카카오톡</p>
                </Link>
              );
            }

            if (link.type === "instagram") {
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  className="flex-none flex items-center gap-2 bg-gray-200 rounded-lg py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icon/instagram.png"
                    alt="인스타그램"
                    width={24}
                    height={24}
                  />
                  <p className="text-slate-800 text-body_sm">인스타그램</p>
                </Link>
              );
            }

            if (link.type === "naver") {
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  className="flex-none flex items-center gap-2 bg-gray-200 rounded-lg py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icon/naver-cafe-c.png"
                    alt="네이버 카페"
                    width={24}
                    height={24}
                  />
                  <p className="text-slate-800 text-body_sm">네이버 카페</p>
                </Link>
              );
            }
          })}
        </div>
      </section>

      <section className="flex flex-col gap-4 pt-6 px-4">
        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-body_bb text-gray-700">클래스 상세 설명</h2>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                <MapPinIcon className="w-4 h-4 text-gray-700" />
                <h3 className="text-body_sb text-gray-700">위치</h3>
              </div>
              <p className="text-body_sr text-gray-700">
                {lesson.pool.location}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                <TimerIcon className="w-4 h-4 text-gray-700" />
                <h3 className="text-body_sb text-gray-700">시간</h3>
              </div>
              <p className="text-body_sr text-gray-700">{lesson.time}</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                <PersonIcon className="w-4 h-4 text-gray-700" />
                <h3 className="text-body_sb text-gray-700">모집</h3>
              </div>
              <p className="text-body_sr text-gray-700">
                {lesson.maxStudents}명
              </p>
            </div>
          </div>

          <p className="flex text-body_sr text-gray-700">
            {lesson.description}
          </p>
        </div>

        <div className="flex flex-col bg-gray-100 rounded-lg">
          <div className="flex items-center justify-between pl-4">
            <h2 className="text-body_bb text-gray-700">클래스 위치</h2>
            <Link href={`/pools/${lesson.pool.id}`} className="flex p-4">
              <ArrowRightIcon className="w-4 h-4 text-gray-900" />
            </Link>
          </div>

          <div className="px-4">
            <Map
              center={{
                lat: lesson.pool.latitude,
                lng: lesson.pool.longitude,
              }}
            >
              <Marker lat={lesson.pool.latitude} lng={lesson.pool.longitude} />
            </Map>
          </div>

          <div className="flex flex-col gap-1 pt-2 px-4 pb-4">
            <p className="text-body_sr text-gray-700">{lesson.pool.location}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LessonPage;
