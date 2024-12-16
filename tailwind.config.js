/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '1px 1px 2px black, 0 0 1em whitesmoke, 0 0 0.2em #558ABB', 
      }
    }
  },
  plugins: [],
}
