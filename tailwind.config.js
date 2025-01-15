/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8BAC3E',
        secondary: '#757575'
      },
      fontFamily: {
        rubik: ['Rubik', 'serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: "512px",
          md: "720px",
          lg: "1024px",
          xl: "1240px",
          '2xl': "1536px",
        },
      }
    },
  },
  plugins: [],
}

