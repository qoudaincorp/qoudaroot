/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: 'class',
   theme: {
     extend: {
       colors: {
         primary_one: {
           "50": "#F5EDED",
           "100": "#34374C",
           "150": "#2C2E3E",
           "200": "#EE302E",
           "250": "#7b809a",
           "300": "#161721",
         },
         primary: "#EE302E",
         secondary: "#2C2E3E",
         secondary_light: "#34374C",
         white: "#F5EDED",
         navy_blue: "#268DBA",
         light_blue: "#9CD6F6",
         light_red: "#F69C9C",
         light_brawn: "#AA8F8D",
         dark_brawn: "#7A514E",
         sky_dark_blue: "#598DAA",
         sky_light_blue: "#6DA6C7",
         light_green: "#79C4C8",
         blue_gray: "#799DC8",
         light_blue_gray: "#92B6E0",
       }
     },
     fontFamily: {
       'poppins': [
         'Poppins, sans-serif',
       ],
     },
   },
   plugins: [],
 }
 