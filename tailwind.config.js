/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // Green accent
          dark: '#059669',
          light: '#34D399',
        },
        dark: {
          DEFAULT: '#1F2937',
          lighter: '#374151',
          darker: '#111827',
          card: '#2D3748',
          bg: '#0F172A',
          hover: '#334155',
        },
        accent: {
          green: '#10B981',
          red: '#EF4444',
        }
      },
      backgroundColor: {
        'dark-bg': '#0F172A',
        'dark-card': '#1E293B',
        'dark-hover': '#334155',
      },
      ringOffsetColor: {
        'dark-bg': '#0F172A',
      }
    },
  },
  plugins: [],
}
