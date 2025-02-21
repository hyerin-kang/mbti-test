/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A5F",
        secondary: "#1E40AF",
      },
    },
  },
  plugins: [],
};
