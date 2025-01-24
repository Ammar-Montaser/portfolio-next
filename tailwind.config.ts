import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";
const flowbite = require("flowbite-react/tailwind");

export default {
  darkMode: "class", // enable dark mode

  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollSnapType: {
        x: "x mandatory",
      },
      dropShadow: {
        glow: ["0 0px 5px var(--color)", "0 0px 5px var(--color)"],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },

      fontFamily: {
        cairo: ["var(--font-cairo)"],
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
        handjet: ["var(--font-handjet)"],
      },
      colors: {
        primary: "var(--primary)",
        primaryContent: "var(--primaryContent)",
        primaryContentHover: "var(--primaryContentHover)",
        secondary: "var(--secondary)",
        secondaryContent: "var(--secondaryContent)",
        secondaryContentHover: "var(--secondaryContentHover)",
        warning: "var(--warning)",
        error: "var(--error)",
        primaryDark: "var(--primaryDark)",
        primaryContentHoverDark: "var(--primaryContentHoverDark)",
        secondaryDark: "var(--secondaryDark)",
        secondaryContentDark: "var(--secondaryContentDark)",
        secondaryContentHoverDark: "var(--secondaryContentHoverDark)",
        accentDark: "var(--accentDark)",
        BG: "var(--BG)",
        color: "var(--color)",
        warningDark: "var(--warningDark)",
        errorDark: "var(--errorDark)",
      },
    },
  },

  plugins: [flowbite.plugin(), addDynamicIconSelectors()],
} satisfies Config;
