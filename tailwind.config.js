/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tech Theme Colors (Home + Technology)
        tech: {
          bg: '#0D1B2A',          // Deep Navy
          accent: '#F88F1E',      // Orange
          'accent-dark': '#d97a15', // Darker orange for hover
          white: '#FFFFFF',
          gray: '#E5E7EB',        // Soft gray for text
        },
        // Creative Theme Colors
        creative: {
          bg: '#333436',          // Charcoal
          primary: '#ED145B',     // Magenta
          'primary-dark': '#d11250', // Darker magenta for hover
          accent: '#15EEA7',      // Mint Green
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
