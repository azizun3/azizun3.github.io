// tailwind.config.js
module.exports = {
  content: [
    './pages/index.html',
    './pages/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
