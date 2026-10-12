/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Apple-inspired palette
        primary: {
          DEFAULT: '#0071E3',    // Apple Blue — CTAs, links, interactive elements
          hover:   '#0066CC',    // Apple Blue hover state
          dark:    '#004FB8',    // Deep Apple Blue for dark mode accents
          darker:  '#1D1D1F',   // Shark off-black
        },
        accent: {
          sky:  '#0071E3',       // Reuse Apple Blue for sky accent
          teal: '#0066CC',       // Apple Blue variant for teal accent
          gray: '#6E6E73',       // Apple Gray — secondary text, metadata
        },
        apple: {
          blue:    '#0071E3',    // Primary CTA blue
          blueDark: '#0066CC',   // Alt/hover blue
          black:   '#1D1D1F',    // Shark off-black — headlines, nav, body text
          gray:    '#6E6E73',    // Secondary text, metadata, dividers
          grayBg:  '#F5F5F7',    // Soft background surfaces, footers
          white:   '#FFFFFF',    // Main canvas
        },
        surface: {
          light: '#FFFFFF',      // Main canvas — pure white
          soft:  '#F5F5F7',      // Apple gray background for sections
          dark:  '#1D1D1F',      // Shark off-black for dark mode background
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(29,29,31,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,29,31,0.04) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(110,110,115,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(110,110,115,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}

