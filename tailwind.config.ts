import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#2188FF",
        "main-soft": "#023B78",
        "main-dark": "#17192D",
        "neutral-gray": "#24292F",
        alert: "#ED3833",
        sucess: "#52C41A",
      },
    },
  },
  plugins: [],
};
export default config;
