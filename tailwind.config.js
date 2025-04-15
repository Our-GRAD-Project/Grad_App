/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jolly: ['"Jolly Lodger"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "hsl(220, 100%, 50%)",
      },
      borderRadius: {
        'custom-radius': '1.5rem',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
