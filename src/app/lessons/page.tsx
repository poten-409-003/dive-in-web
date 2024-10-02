import { getLessons } from "@/api/lessons";
import LessonChip from "@/components/ui/Chip";
import Image from "next/image";
import Link from "next/link";

export default async function LessonsPage() {
  const lessons = await getLessons();

  return (
    <div className="flex flex-col">
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 pt-10 px-4 pb-4">
          <h2 className="font-bold text-2xl">수영 클래스</h2>
          <p className="font-bold text-lg text-gray-500">{lessons.length}</p>
        </div>

        <ul className="flex flex-col gap-6 px-4 pb-10">
          {lessons.map((lesson, index) => (
            <li key={lesson.id}>
              <Link
                href={`/lessons/${lesson.id}`}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={lesson.instructorLogo}
                    alt="로고 이미지"
                    width={24}
                    height={24}
                    priority={index < 5}
                    className="flex-none w-6 h-6 rounded-full"
                  />
                  <p className="text-sm text-gray-600">
                    {lesson.instructorName}
                  </p>
                </div>

                <div className="flex-none flex flex-col items-start gap-2 bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-1">
                    <LessonChip label={lesson.level} />
                    {lesson.tags.split(",").map((tag) => (
                      <LessonChip key={tag} label={tag} />
                    ))}
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-gray-900 font-bold">
                      {lesson.lessonName}
                    </h3>
                    <p className="text-gray-700 text-sm line-clamp-2">
                      {lesson.description}
                      {lesson.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="text-sm font-medium text-gray-900">
                      {lesson.price.toLocaleString()}원
                    </p>
                    <p className="text-sm text-gray-500">{lesson.times}회</p>
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
