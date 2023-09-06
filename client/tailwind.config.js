/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      colors: {
        "yellow": {
          "500": "#fdba2c",
        },
        "fuchsia": {
          "500": "#a630a2",
        },
        "red": {
          "500": "#d22115",
        },
        "green": {
          "500": "#9acd32",
        },
        "black": {
          "500": "#1d1d1b",
        },
        "grey": {
          "100": "#f5f5f5"
        }
      },
    },
  },
  plugins: [],
};
