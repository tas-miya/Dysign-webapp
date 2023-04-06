/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fff8f7",
        secondary: "#00f6ff",
        salmon: "#F29179",
        earthyellow: "#F1B562",
        mountpink: "#9581A5",
        flame: "#E26338",
        cinerous: "#917974",
        almond: "#FAE5CF",
      },
      fontFamily: {
        handrawn: ["Delicious Handrawn", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        bold: '700',
      },
      backgroundImage: {
        'navbar-header': "url('/src/assets/header.svg')"
      },
      backgroundSize: {
        '250': '270%',
      }
    },
    screens: {
      xs: "360px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
};