import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundLight: '#F8FDFC',
        backgroundDark: '#1A1A1A',
        primary: '#6DBF4B',
        secondary: '#E0E0E0',
        textLight: '#1E1E1E',
        textDark: '#FAFAFA'
      },
    },
  },
  plugins: [],
}

export default config
