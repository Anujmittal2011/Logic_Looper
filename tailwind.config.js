/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#222222',
          primary: '#414BEA',
          primaryLight: '#D9E2FF',
          accent: '#F05537',
          grayBg: '#F6F5F5',
          white: '#FFFFFF',
          purple: '#7752FE',
          darkBlue: '#190482',
          lightCyan: '#DDF2FD',
          lightBlue: '#C2D9FF',
          darkGray: '#3D3B40',
          blueActive: '#525CEB',
          grayBlue: '#BFCFE7',
          lightPurple: '#F8EDFF',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
