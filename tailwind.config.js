/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004aad',
        accent: '#f9a826',
        dark: '#1b1f23',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }

  },
  plugins: []
}
