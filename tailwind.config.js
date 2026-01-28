/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#1a1d21',
          950: '#0d0f11',
        },
        accent: {
          50: '#e6f3f5',
          100: '#cce7eb',
          200: '#99cfd7',
          300: '#66b7c3',
          400: '#4a9fad',
          500: '#2d8797',
          600: '#246d79',
          700: '#1b525b',
          800: '#12373d',
          900: '#091c1f',
        },
        success: {
          light: '#d4edda',
          DEFAULT: '#5a9e6f',
          dark: '#3d7a52',
        },
        risk: {
          light: '#f8d7da',
          DEFAULT: '#c5727a',
          dark: '#a84f58',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
