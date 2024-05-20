/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e3e9ea",
        secondary: "#1c766f",
      },
      fontFamily: {},
      borderRadius: { none: "0", xs: "0.75rem", sm: "1.25rem" },
    },
  },
  plugins: [],
};

