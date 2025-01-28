/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink1': '#FFE2E2',
        'pink2': '#FFCCCC',
        'pink3': '#FFB8B8',
        // 'pink3': '#eed8b4',
        'pink4' : '#FFA3A3',
        'logo-green': '#004939',
        'btn-green' : '#004939',
        'green1': '#00613B',
        'orange1': '#FF9D23',

        // backgrounds
        'badami1' : '#f5e8d3',
        'badami2' : '#e8c692',
        'badami3' : '#e6c793',
        'badami4' : '#a06e22',
        'badami5' : '#2f200a',
        'badamidark' : '#191105',

        // text and buttons
        'badami6' : '#2a1d09',
        'btn-badami' : '#3f2c0e'
      },
      animation: {
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}

 