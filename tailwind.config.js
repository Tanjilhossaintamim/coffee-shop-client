/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rancho': "'Rancho', cursive"
      },
      colors: {
        "color-cofee": "#331A15",
        "color-chocklet": "#E3B577",
        "color-black": "#242222",
        "color-black2": "#1B1A1A",
        "color-gray": "#ECEAE3",
      },
      backgroundImage: {
        'header-img': "url(./src/assets/15.jpg)",
        'banner-img': "url(./src/assets/banner.png)",
      }
    },
  },
  plugins: [],
}

