import { dummySwimmingClasses } from "@/data/dummy";
import Image from "next/image";
import Link from "next/link";

export default function LessonsPage() {
  const lessons = dummySwimmingClasses;
  return (
    <div className="flex flex-col">
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 pt-10 px-4 pb-4">
          <h2 className="font-bold text-2xl">수영 클래스</h2>
          <p className="font-bold text-lg text-gray-500">{lessons.length}</p>
        </div>

        <ul className="flex flex-col gap-6 px-4 pb-10">
          {dummySwimmingClasses.map((swimmingClass, index) => (
            <li key={swimmingClass.id}>
              <Link
                href={`/lessons/${swimmingClass.id}`}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={swimmingClass.photos[0]}
                    alt="로고 이미지"
                    width={24}
                    height={24}
                    priority={index < 5}
                    className="flex-none w-6 h-6 rounded-full"
                  />
                  <p className="text-sm text-gray-600">수달상회</p>
                </div>

                <div className="flex-none flex flex-col items-start gap-2 bg-gray-100 rounded-lg p-4">
                  <ul className="flex items-center gap-1">
                    {swimmingClass.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs font-bold text-gray-500 px-1.5 py-0.5 rounded bg-gray-200"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-gray-900 font-bold">
                      {swimmingClass.poolName}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {swimmingClass.description}
                      {swimmingClass.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="text-sm text-gray-900">
                      {swimmingClass.pricePerSession.toLocaleString()}원
                    </p>
                    <p className="text-sm text-gray-500">1회</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
