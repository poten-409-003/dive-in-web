import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const SolidLocationIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.3999C10.0904 2.3999 8.25908 3.1079 6.90882 4.36814C5.55856 5.62839 4.79999 7.81765 4.79999 9.5999C4.79999 16.7999 12 21.5999 12 21.5999C12 21.5999 19.2 16.7999 19.2 9.5999C19.2 7.81765 18.4414 5.62839 17.0912 4.36814C15.7409 3.1079 13.9095 2.3999 12 2.3999Z" />
      <circle cx="12" cy="9.60019" r="2.4" fill="#F9FAFE" />
    </svg>
  );
};

export default SolidLocationIcon;
