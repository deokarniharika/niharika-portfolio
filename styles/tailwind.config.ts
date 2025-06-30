import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#90EE90', // pastel green
        secondary: '#FADADD', // soft pink
      },
    },
  },
  plugins: [],
}

export default config