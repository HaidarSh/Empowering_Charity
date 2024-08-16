/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/sweetalert2/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      },
      borderColor: {
        'primary': '#2980b9',
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      colors: {
        red: {
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        darkBlue: '#2980b9',
        darkBlueGray: '#2c3e50',
          customBlue: '#338AF0',
      },
    },
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'horizontal-tb': 'horizontal-tb',
        'vertical-lr': 'vertical-lr',
      },
  },
  
  variants: {
    writingMode: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-profile-bg': {
          borderColor: 'var(--profile-bg-color)',
        },
      });
    },
  ],
};
