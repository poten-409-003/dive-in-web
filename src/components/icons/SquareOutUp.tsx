import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const SquareOutUpIcon = (props: Props) => {
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
        d="M5.00012 13.75C5.00012 13.75 5.00012 18.4185 5.00012 18.75C5.00012 19.0815 5 20 5 20C5 20 5.93529 20 6.27283 20H17.7273H18.9999C18.9999 20 19 19.0815 19 18.75V13.75M12.0001 15.625L12 6M15.8182 8.75L12.0001 5L8.18191 8.75"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default SquareOutUpIcon;
