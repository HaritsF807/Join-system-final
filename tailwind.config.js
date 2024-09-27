/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{vue,js,ts,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary : '#075EFD',
      },
    },
    
  },
  plugins: [],
};