import type { Config } from "tailwindcss";

const config: Config = {
  // en v4 no hace falta "content"
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "Arial"],
        display: ["var(--font-display)", "var(--font-sans)"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
