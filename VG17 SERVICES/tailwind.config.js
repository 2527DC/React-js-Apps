/** @type {import('tailwindcss').Config} */
export default {
  content: [
  
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {

      spacing: {
        '100': '600px',
      },

      colors :{
        cb:{

          light:"#517cab",
          dark :"#0d4876",
            mlight  :"#f9fee0"


        }
      }
    },
  },
  plugins: [],
}