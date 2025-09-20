/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // example custom color
        secondary: "#FACC15",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
