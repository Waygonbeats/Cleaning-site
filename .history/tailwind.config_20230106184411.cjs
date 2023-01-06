/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {},
  },
  variants:{
    extend:{
      height: {
        '38': '154px',
      },
      display:['group-focus']
    },
  },
  plugins: [],
}
