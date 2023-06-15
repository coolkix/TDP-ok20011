/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      height: {
        'about': '700px',
      },
      width: {
        'about': '420px',
      },
      backgroundColor: {
        'neutral': '#f5f6f8',
        'dark': '#333',
        'dark-hover': '#454545',
      },
      borderWidth: {
        '3': '3px',
      },
      borderColor: {
        'dark': '#333',
      },
      colors: {
        'success': '#4BB543',
        'df':'#1B5089',
        'unFocused':'#318787',
        'focused':'#316D6D',
        'complementary': '#D2891B',
        'monochromeUnfocused': '#2C2C2C',
        'monochromeFocused': '#121212',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
