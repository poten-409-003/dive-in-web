import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const PenIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.294 6.63706L17.5208 10.8639M5.50004 18.6421L5.5 14.3994L15.3996 4.5L19.6421 8.74255L9.74264 18.642L5.50004 18.6421Z"
        // stroke="#1C2028"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default PenIcon;
