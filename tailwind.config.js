import { hover } from 'motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        droid:['"Droid Serif"','serif']
      },
      rotate: {
        'y-180': '180deg',
      },
    },
  },
  variants: {
    extend: {
      transformStyle: ['responsive','hover'],
      backfaceVisibility: ['responsive','hover'],
    },
  },
  plugins: [],
}