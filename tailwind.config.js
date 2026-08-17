/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1220",
          900: "#101a2e",
          800: "#182643",
        },
        teal: {
          500: "#0EA5A0",
          600: "#0C8B87",
        },
        amber: {
          500: "#F59E0B",
        },
        rose: {
          600: "#E11D48",
        },
        slate: {
          50: "#F7F8FA",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
