import InstagramIcon from "@/components/icons/InstagramIcon";
import KakaoTalkIcon from "@/components/icons/KakaoTalkIcon";
import { dummySwimmingClass } from "@/data/dummy";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LessonPage = async () => {
  const lesson = dummySwimmingClass;
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <Link href="/lessons">
          <ChevronLeftIcon className="w-6 h-6" />
        </Link>
      </div>

      {/* snap-mandatory를 활성화하여, 약간의 스크롤로 snap을 강제하여 쉽게 넘어갈 수 있도록 함 */}

      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
        {lesson.photos.map((photo) => (
          <div key={photo} className="snap-center snap-always shrink-0 w-full">
            <Image
              src={photo}
              alt=""
              width={400}
              height={400}
              className="w-full h-40 object-cover rounded-lg shadow-xl bg-white"
            />
          </div>
        ))}
      </div>

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

      <section className="p-4 flex flex-col gap-2">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">클래스 위치</h2>
          <button className="ml-auto text-slate-600">바로가기</button>
        </div>
        <div className="w-full h-60 rounded-lg shadow-xl bg-white border"></div>
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
