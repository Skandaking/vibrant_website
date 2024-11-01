/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#4F46E5',
          light: '#818CF8',
          dark: '#3730A3',
        },
        secondary: {
          main: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        dark: {
          primary: {
            main: '#818CF8',
            light: '#A5B4FC',
            dark: '#4F46E5',
          },
          background: {
            default: '#111827',
            paper: '#1F2937',
            alternate: '#374151',
          }
        }
      },
    },
  },
  plugins: [],
}

