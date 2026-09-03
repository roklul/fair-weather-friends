/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FCFAF6',
          100: '#F7F4ED',
          200: '#EEEAE0',
          300: '#E1D9C9',
          400: '#CFC3B2',
          900: '#2A241C',
        },
        charcoal: {
          DEFAULT: '#1C1917',
          light: '#292524',
          muted: '#57534E',
        },
        beef: {
          chuck: '#B84A39',
          rib: '#D8963E',
          loin: '#5B705B',
          round: '#7C2333',
          brisket: '#A89279',
          plate: '#D26C42',
          flank: '#333A42',
          shank: '#6B4C38',
          red: '#8B1E1E',
          burgundy: '#661824',
          gold: '#C58C36'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Instrument Serif"', '"Georgia"', 'serif'],
        sans: ['"Inter"', '"Noto Sans TC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
