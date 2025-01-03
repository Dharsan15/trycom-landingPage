/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend : {
      fontFamily : {
         display : ['DM Sans','latin']
      },
      boxShadow: {
        'inset-purple': 'inset 0 -10px 50px #101636', 
      }
    },
   
  },
  plugins: [],
};
