/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('/src/assets/contact.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

