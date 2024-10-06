"use client";

type Props = {
  label: string;
};

// 상급, 중급, 초급, 기본
const ColorClassMap: Record<string, string> = {
  기본: "bg-chip-1 text-chip-1-foreground",
  초급: "bg-chip-2 text-chip-2-foreground",
  중급: "bg-chip-3 text-chip-3-foreground",
  고급: "bg-chip-4 text-chip-4-foreground",
  상급: "bg-chip-4 text-chip-4-foreground",
  마스터즈: "bg-gray-800 text-white",
};

const LessonChip = ({ label }: Props) => {
  const colorClass = ColorClassMap[label] || ColorClassMap["기본"];

  return (
    <div className={`text-label_sb px-1.5 py-0.5 rounded ${colorClass}`}>
      <p>{label}</p>
    </div>
  );
};

export default LessonChip;
