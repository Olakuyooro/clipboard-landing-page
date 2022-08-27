/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Bai Jamjuree"],
      },
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      width: {
        128: "30rem",
        140: "28rem",
        100: "24rem",
        150: "37rem",
        125: "19rem",
        200: "48rem",
      },
      height:{
        100: "48rem"
      },
      fontSize:{
        extra: '1.7rem',
        mini: '1rem'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/image-computer.png')",
      }
    },
  },
  plugins: [],
};
