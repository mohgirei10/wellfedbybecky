import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        brand: {
          darkBrown: '#38261A', // Used in footer
          yellow: '#FFDF40',    // Primary CTA buttons and accents
          pinkLight: '#FDF1F5', // Product card backgrounds and review section
          greenLight: '#E8F5E9',// Gradient starting point
          orangeLight: '#FFF3E0',// Indulge section background
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #E8F5E9, #FFFDE7, #FFF59D)',
        'indulge-gradient': 'linear-gradient(to right, #FFF3E0, #FCE4EC, #F8BBD0)',
      }
    },
  },
  plugins: [],
};

export default config;