module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"]
      },
      colors: {
        "bluegray": {
          100: '#3679FE',
          150: '#1F68F0',
          200: '#215BAB',
          300: '#1E2A48',
          400: '#141D31'
        },
        "secondary": {
          100: '#8BABE7',
        }
      }
    },
  },
  plugins: [],
}
