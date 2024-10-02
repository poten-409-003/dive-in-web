import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const PoolIcon = (props: Props) => {
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
        d="M3 19C4 19.8333 7 20.5 9 19C9.83333 19.6667 13 20.6 15 19C15.8333 19.8333 19.5 20.5 21 19"
        strokeWidth="1.5"
      />
      <path d="M9 5H6V17" strokeWidth="1.5" />
      <path d="M21 5H18V17" strokeWidth="1.5" />
      <path d="M9 8H18" strokeWidth="1.5" />
      <path d="M9 11H18" strokeWidth="1.5" />
      <path d="M9 14H18" strokeWidth="1.5" />
    </svg>
  );
};

export default PoolIcon;
