import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8edf7',
          100: '#c5d0eb',
          200: '#9baede',
          300: '#6d8ad0',
          400: '#4a6fc5',
          500: '#002868',
          600: '#00225a',
          700: '#001c4c',
          800: '#00163e',
          900: '#001030',
          950: '#000a22',
        },
        accent: {
          50: '#fce8ec',
          100: '#f6b8c4',
          200: '#f0899c',
          300: '#ea5a74',
          400: '#e53555',
          500: '#BF0A30',
          600: '#a00828',
          700: '#810620',
          800: '#620418',
          900: '#430310',
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        card: "0 4px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.1)",
        glow: "0 0 24px rgba(0,40,104,0.12)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
