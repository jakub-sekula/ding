import { colors } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse-fast 0.9s infinite",
      },
      boxShadow: {
        "orange-glow-dark": `0 0 30px 0px rgba(255, 155, 0, 0.3),0 0 60px 30px rgba(255, 155, 0, 0.15),0 0 120px 60px rgba(255, 155, 0, 0.05), 0 0 200px 100px rgba(255, 155, 0, 0.03)`,
        "orange-glow-light": `0 0 30px 0px rgba(255, 155, 0, 0.6),0 0 60px 30px rgba(255, 155, 0, 0.3),0 0 120px 60px rgba(255, 155, 0, 0.1), 0 0 200px 100px rgba(255, 155, 0, 0.06)`,
      },
    },
  },
  plugins: [],
};

export default config;
