/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        black: '#000000',
        grey: '#a5a5a3',
        green:'#bdeb2e',
        ligthGrey:'#f6f6f4',
      }
    },
  },
  plugins: [],
}

