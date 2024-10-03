"use client";

import InstructorProfile from "@/app/_components/InstructorProfile";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import LessonChip from "@/components/ui/Chip";
import { poolDetailSchema } from "@/schemas/pools";
import Link from "next/link";
import { useMemo, useState } from "react";
import { z } from "zod";

type PoolDetail = z.infer<typeof poolDetailSchema>;

type Props = {
  lessons: PoolDetail["lesson"];
};

const RelativeLessonSection = ({ lessons }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const showMoreButton = lessons.length > 6 && !showMore;

  const displayLessons = useMemo(() => {
    if (!showMore) {
      return lessons.slice(0, 6);
    }

    return lessons;
  }, [lessons, showMore]);

  const showLessons = lessons.length > 0;
  const lessonCount = lessons.length;

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg">
      <div className="flex items-center gap-2 px-4 pt-4">
        <h2 className="text-body_bb text-gray-700">연관 클래스</h2>
        <p className="text-body_bb text-gray-500">{lessonCount}</p>
      </div>

      {showLessons && (
        <ul className="flex flex-col divide-y divide-gray-200">
          {displayLessons.map((poolLesson) => (
            <li key={poolLesson.id}>
              <Link
                href={`/lessons/${poolLesson.id}`}
                className="flex items-center gap-4 p-4"
              >
                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <InstructorProfile
                      avatar={poolLesson.academyImageUrl}
                      name={poolLesson.academyName}
                    />
                    <span className="text-body_sr">∙</span>
                    <div className="flex flex-wrap items-center gap-1">
                      <LessonChip label={poolLesson.level} />
                      {poolLesson.keyword.split(",").map((tag) => (
                        <LessonChip key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                  <p className="text-body_sm text-gray-700">
                    {poolLesson.lessonName}
                  </p>
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
