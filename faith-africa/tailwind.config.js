/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070a13',
          card: '#0f172a',
          border: '#1e293b',
          gold: '#d97f38',
          goldLight: '#be8d3f',
          goldMuted: 'rgba(217, 127, 56, 0.15)',
        },
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        heading: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
