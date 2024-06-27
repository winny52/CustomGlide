// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}', 
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss'),
//     require('@tailwindcss'),
//   ],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,cjs,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      fontSize: {
        'base': ['11px', '1.5'],  // 11px for paragraphs
        'h2': ['16px', '1.5'],    // 16px for h2
        'h1': ['20px', '1.5'],    // 20px for h1
      },
    },
  },
  plugins: [],
};