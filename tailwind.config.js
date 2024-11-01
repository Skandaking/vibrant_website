/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          main: '#252962',
          light: '#818CF8',
          dark: '#3730A3',
        },
        'dark-primary': {
          main: '#252962',
          light: '#A5B4FC',
          dark: '#4F46E5',
        },
        'secondary': {
          main: '#F36724',
          light: '#34D399',
          dark: '#059669',
        },
        'dark-secondary': {
          main: '#F36724',
          light: '#6EE7B7',
          dark: '#10B981',
        },
      },
    },
  },
  plugins: [],
}

