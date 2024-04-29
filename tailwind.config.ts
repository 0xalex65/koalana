import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    textStrokeWidth: (theme: Config.theme) => theme("borderWidth"),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "theme-sm": "2px 2px 0 0 #262626",
        "theme-md": "6px 6px 0 1px #262626",
        "theme-lg": "8px 8px 0 1px #262626",
        "secondary-theme-lg": "8px 8px 0 1px #FF8D4D",
        "theme-xl": "14px 15px 4px 0 #262626",
        "theme-inner": "inset 0 4px 4px 0px #00000019",
      },
      colors: {
        dark: "#262626",
        primary: "#4DDFFF",
        secondary: "#FF8D4D",
      },
      dropShadow: {
        "theme-sm": "4px 4px 0 #262626",
      },
      fontFamily: {
        "overpass-mono": ["Overpass Mono", "monospace"],
        raleway: ["Raleway", "sans-serif"],
        sansation: ["Sansation", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      textStrokeColor: { dark: "#262626" },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")()],
};
export default config;
