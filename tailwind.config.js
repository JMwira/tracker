/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "c1":"(0, 100%, 68%)",
        "c2":"hsl(230, 29%, 20%)",
        "c3":"hsl(231, 7%, 65%)",
        "c4":"hsl(207, 33%, 95%)",
        "c5":"#F58A88"
      },
      backgroundImage:{
        'bg':"url('../src/assets/illustration-devices.svg')"
      }
    },
  },
  plugins: [],
}

