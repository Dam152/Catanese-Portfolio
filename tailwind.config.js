/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        NavColor: '#171717',
        buttonColor:'#27AE60',
        cardServizi: '#212121'
      },
      textColor:{
        textSubHero: '#828282',
        gray2: "#4F4F4F",
        green2: "#27AE60"
      },
      fontSize:{
        fontSubHero: '1.12rem'
      },
      borderRadius:{
        roundedImg: "50%"
      },
     width:{
       cardservizi: '349px',
       form: '750px'
     }
    },
  },
  plugins: [],
};
