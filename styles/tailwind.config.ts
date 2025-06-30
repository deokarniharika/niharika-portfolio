import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundLight: '#F4F6F3', // light grey-green background
        backgroundDark: '#1A1A1A', // deep grey for dark mode
        primary: '#6DBF4B', // green
        secondary: '#B0BEC5', // soft grey-blue
        textLight: '#1E1E1E',
        textDark: '#FAFAFA'
      },
    },
  },
  plugins: [],
}

export default config