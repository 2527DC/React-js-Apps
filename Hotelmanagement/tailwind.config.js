import { light } from '@mui/material/styles/createPalette';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontSize: {
       
        ml :"500px"
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