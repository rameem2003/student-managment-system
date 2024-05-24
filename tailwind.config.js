/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primaryBG: "linear-gradient(180deg, #0276FF 7.8%, #313B47 100%)",
      },
    },
  },
  plugins: [],
};
