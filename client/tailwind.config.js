/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
    },
    // colors: {
    //   "yellow": "#fdba2c",
    //   "fuchsia": "#a630a2",
    //   "red": "#d22115",
    //   "green": "#9acd32",
    //   "black": "#1d1d1b",
    // },
  },
  plugins: [],
};
