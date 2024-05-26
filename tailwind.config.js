export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'smoke': 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 80%)',
      },
    },
    fontFamily: {
      abc: ["Sora", "sans-serif"],
      outfit: ["Outfit", "sans-serif"]
    }
  },
  plugins: [],
}
