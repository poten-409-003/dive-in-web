import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const ArrowLeftIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.7782 4.22183L8 12L15.7782 19.7782"
        // stroke="#1C2028"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
