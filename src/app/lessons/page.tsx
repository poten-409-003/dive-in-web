import { dummySwimmingClasses } from "@/data/dummy";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LessonsPage() {
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <h1 className="font-bold text-xl">Dive-In</h1>
      </div>

      <section className="flex flex-col px-4">
        <Link
          href="/search"
          className="relative flex p-2 border border-gray-300 rounded-md overflow-hidden"
        >
          <span className="text-sm text-slate-500">강습 검색</span>
          <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </Link>
      </section>

      <section className="flex flex-col gap-4 py-4 px-4">
        <h2 className="font-bold text-lg">클래스 모집 정보</h2>
        <ul className="flex flex-col gap-6">
          {dummySwimmingClasses.map((swimmingClass) => (
            <li key={swimmingClass.id}>
              <Link href={`/lessons/${swimmingClass.id}`} className="flex">
                <Image
                  src={swimmingClass.photos[0]}
                  alt=""
                  width={100}
                  height={100}
                  className="flex-none w-32 aspect-square rounded-lg"
                />
                <div className="flex-none flex flex-col gap-1 pl-3">
                  <ul className="flex items-center gap-2">
                    {swimmingClass.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs px-1 py-0.5 border rounded-lg"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-bold">{swimmingClass.poolName}</h3>
                  <p className="text-xs">{swimmingClass.location}</p>
                  <p className="text-xs">
                    강사 {swimmingClass.instructorCount}명 수강생{" "}
                    {swimmingClass.studentCount}인 수업
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    {swimmingClass.pricePerSession}원
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
