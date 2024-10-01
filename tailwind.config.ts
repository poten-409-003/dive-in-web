import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// --gray-900: #1c2028;
//   --gray-800: #3d4149;
//   --gray-700: #5c5f69;
//   --gray-600: #70737d;
//   --gray-500: #989ca6;
//   --gray-400: #cbced7;
//   --gray-300: #e2e5ec;
//   --gray-200: #eef0f6;
//   --gray-100: #f9fafe;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: {
        900: "#1c2028",
        800: "#3d4149",
        700: "#5c5f69",
        600: "#70737d",
        500: "#989ca6",
        400: "#cbced7",
        300: "#e2e5ec",
        200: "#eef0f6",
        100: "#f9fafe",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          sub: "var(--primary-sub)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
        },
        // gray: {
        //   900: "var(--gray-900)",
        //   800: "var(--gray-800)",
        //   700: "var(--gray-700)",
        //   600: "var(--gray-600)",
        //   500: "var(--gray-500)",
        //   400: "var(--gray-400)",
        //   300: "var(--gray-300)",
        //   200: "var(--gray-200)",
        //   100: "var(--gray-100)",
        // },
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "0.875rem" }],
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
