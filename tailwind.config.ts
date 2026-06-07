import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      colors: {
        // Signature sage/olive green — drawn from the delivered deck (#7e8f74 / #455f51)
        sage: {
          50: "#f5f6f3",
          100: "#e8ebe3",
          200: "#d3dac8",
          300: "#b4bfa3",
          400: "#95a381",
          500: "#7e8f74", // brand
          600: "#65755b",
          700: "#505d49",
          800: "#434f3e",
          900: "#3a4336",
          950: "#1e231b",
        },
        paper: "#faf9f6", // warm white canvas
        cream: "#f1eee6",
        sand: "#e7e1d4", // warm beige accent (deck lt2)
        line: "#e4e0d6", // hairline borders
        ink: "#1b1c1a",
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        wrap: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
