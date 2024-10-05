import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   white: "#ffffff",

    // },
    extend: {
      colors: {
        gray: {
          "100": "#f9fafe",
          "200": "#eef0f6",
          "300": "#e2e5ec",
          "400": "#cbced7",
          "500": "#989ca6",
          "600": "#70737d",
          "700": "#5c5f69",
          "800": "#3d4149",
          "900": "#1c2028",
        },
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
        chip: {
          "1": {
            DEFAULT: "var(--chip-1)",
            foreground: "var(--chip-1-foreground)",
          },
          "2": {
            DEFAULT: "var(--chip-2)",
            foreground: "var(--chip-2-foreground)",
          },
          "3": {
            DEFAULT: "var(--chip-3)",
            foreground: "var(--chip-3-foreground)",
          },
          "4": {
            DEFAULT: "var(--chip-4)",
            foreground: "var(--chip-4-foreground)",
          },
        },
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "0.875rem" }],
        label_sb: ["0.75rem", { fontWeight: "700" }],
        body_sr: ["0.875rem", { lineHeight: "1.25rem" }],
        body_sm: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "500" }],
        body_sb: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "700" }],
        body_br: ["1rem", { lineHeight: "1.375rem" }],
        body_bm: ["1rem", { lineHeight: "1.375rem", fontWeight: "500" }],
        body_bb: ["1rem", { lineHeight: "1.375rem", fontWeight: "700" }],
        body_lr: ["1.125rem", { lineHeight: "1.5rem" }],
        body_lb: ["1.125rem", { lineHeight: "1.5rem", fontWeight: "700" }],
        heading_1: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],
        heading_2: ["1.375rem", { lineHeight: "1.875rem", fontWeight: "700" }],
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    require("tailwindcss-animate"),
  ],
};
export default config;
