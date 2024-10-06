import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const TalkIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.051 4C7.05736 4 3 7.29375 3 11.3313C3 13.8813 4.66456 16.1125 7.05736 17.4937L6.43315 21L10.2824 18.45C10.8026 18.5563 11.4268 18.5562 11.947 18.5562C16.9407 18.5562 20.998 15.2625 20.998 11.225C21.1021 7.29375 17.0447 4 12.051 4Z"
        // fill="#3B1E1E"
      />
    </svg>
  );
};

export default TalkIcon;
