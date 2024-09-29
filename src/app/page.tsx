import { dummySwimmingClasses } from "@/data/dummy";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <h1 className="font-bold text-xl">DiveIn</h1>
      </div>

      <section className="flex flex-col px-4">
        <input
          type="text"
          name="course-search"
          id="course-search"
          placeholder="강습 검색"
          className="border border-gray-300 rounded-md p-2"
        />
      </section>

      <section className="flex flex-col gap-2 py-4 px-4">
        <h2 className="font-bold text-lg">인기 클래스</h2>
        <ul className="flex gap-4 overflow-x-auto snap-x no-scrollbar">
          {dummySwimmingClasses.map((swimmingClass) => (
            <li
              key={swimmingClass.id}
              className="snap-start flex-none flex flex-col gap-2"
            >
              <Image
                src={swimmingClass.photos[0]}
                alt=""
                width={200}
                height={200}
                priority
                className="rounded-lg"
              />
              <h3 className="font-bold">{swimmingClass.className}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4 py-4 px-4">
        <h2 className="font-bold text-lg">클래스 모집 정보</h2>
        <ul className="flex flex-col gap-6">
          {dummySwimmingClasses.map((swimmingClass) => (
            <li key={swimmingClass.id} className="flex">
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
                <p className="text-xs">1회 {swimmingClass.pricePerSession}원</p>
              </div>
            </li>
          ))}
          {/* <li>
            <div className="w-20 h-20 bg-slate-300" />
            <div>
              <ul>
                <li>중급</li>
                <li>접영</li>
                <li>다이빙</li>
              </ul>
              <h3>올림픽 수영장</h3>
              <p>서울 송파구</p>
              <p>강사 1명 수강생 5인 수업</p>
              <p>1회 60,000원</p>
            </div>
          </li> */}
        </ul>
      </section>
    </div>
  );
}
