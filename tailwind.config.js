/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  mode: 'jit',
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

