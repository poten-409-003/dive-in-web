import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const SquareOutSideIcon = (props: Props) => {
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
        d="M13.1666 10.8333L19 5M19 5H15.1111M19 5V8.88889M19 13.5556V19H5L5 5H10.4444"
        // stroke="black"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default SquareOutSideIcon;
