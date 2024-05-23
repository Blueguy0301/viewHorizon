import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      "blue":"#3185FC",
      "orange":"#E28413",
      "brown":"#35281D",
      "white":"#FBF5F3",
      "red":"#DE3C4B"
    }
  },
  plugins: [],
};
export default config;
