"use client";

import InstructorProfile from "@/app/_components/InstructorProfile";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import LessonChip from "@/components/ui/Chip";
import { PoolDetail } from "@/types/pool";
import Link from "next/link";
import { useMemo, useState } from "react";

type Props = {
  lessons: PoolDetail["lessons"];
};

const RelativeLessonSection = ({ lessons }: Props) => {
  console.log("log: RelativeLessonSection -> lessons", lessons);
  const [showMore, setShowMore] = useState(false);

  const showMoreButton = lessons.length > 6 && !showMore;

  const displayLessons = useMemo(() => {
    if (!showMore) {
      return lessons.slice(0, 6);
    }

    return lessons;
  }, [lessons, showMore]);

  const isEmpty = lessons.length === 0;
  const lessonCount = lessons.length;

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg">
      <div
        className={`flex items-center gap-2 ${isEmpty ? "p-4" : "px-4 pt-4"}`}
      >
        <h2 className="text-body_bb text-gray-700">연관 클래스</h2>
        <p className="text-body_bb text-gray-500">{lessonCount}</p>
      </div>

      {!isEmpty && (
        <ul className="flex flex-col divide-y divide-gray-200">
          {displayLessons.map((poolLesson) => (
            <li key={poolLesson.id}>
              <Link
                href={`/lessons/${poolLesson.id}`}
                className="flex items-center gap-4 p-4"
              >
                <div className="flex-1 flex flex-col gap-3">
                  <InstructorProfile
                    avatar={poolLesson.academyImageUrl}
                    name={poolLesson.academyName}
                  />
                  {/* <div className="flex-none flex items-center gap-2">
                    <Image
                      src={poolLesson.academyImageUrl || "/empty/academy_profile.png"}
                      alt={poolLesson.academyName}
                      width={24}
                      height={24}
                      className="flex-none w-6 h-6 rounded-full"
                    />
                    <p className="text-body_sr text-gray-600">
                      {poolLesson.academyName}
                    </p>
                  </div> */}
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-1">
                      <LessonChip label={poolLesson.level} />
                      {poolLesson.keyword.split(",").map((tag) => (
                        <LessonChip key={tag} label={tag} />
                      ))}
                    </div>
                    <p className="text-body_sm text-gray-700">
                      {poolLesson.lessonName}
                    </p>
                  </div>
                </div>

                <div className="flex p-2">
                  <ArrowRightIcon className="w-4 h-4 text-gray-700" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {showMoreButton && (
        <button
          onClick={() => {
            setShowMore(true);
          }}
          className="flex items-center justify-center pt-1 px-4 pb-4"
        >
          <span className="text-body_sr text-gray-500">더보기</span>
        </button>
      )}
    </div>
  );
};

export default RelativeLessonSection;
