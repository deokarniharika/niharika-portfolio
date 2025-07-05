import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundLight: '#FFFFFF',
        backgroundDark: '#1A1A1A',
        primary: '#A8D5BA', // pastel green
        secondary: '#E0E0E0', // light grey boxes
        textLight: '#1E1E1E',
        textDark: '#FAFAFA'
      },
    },
  },
  plugins: [],
}

export default config