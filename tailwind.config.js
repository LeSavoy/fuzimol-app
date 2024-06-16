/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#458FF6',
        lightGray: '#7D7987',
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"]
      }
    },
  },
  plugins: [],
}

