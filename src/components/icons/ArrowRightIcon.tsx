import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const ArrowRightIcon = (props: Props) => {
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
      <path d="M8.77816 4.22183L16.5563 12L8.77816 19.7782" strokeWidth="1.5" />
    </svg>
  );
};

export default ArrowRightIcon;
