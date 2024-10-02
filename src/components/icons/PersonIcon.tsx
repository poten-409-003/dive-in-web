import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const PersonIcon = (props: Props) => {
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
      <circle cx="12" cy="8" r="3.25" strokeWidth="1.5" />
      <path
        d="M4 20C4.5 18.3333 6.8 15 12 15C17.2 15 19.5 18.3333 20 20"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default PersonIcon;
