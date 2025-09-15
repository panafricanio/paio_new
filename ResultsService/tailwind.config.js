/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Essential classes for the results page
    'bg-amber-600', 'bg-amber-700', 'bg-amber-50', 'bg-amber-100',
    'bg-yellow-100', 'bg-yellow-300', 'bg-yellow-900',
    'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800',
    'bg-green-100', 'bg-green-300', 'bg-green-600', 'bg-green-900', 'bg-green-50',
    'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-600', 'bg-blue-900',
    'bg-white', 'bg-gray-50',
    'text-white', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
    'text-amber-600', 'text-amber-700', 'text-amber-800', 'text-amber-900',
    'text-yellow-600', 'text-yellow-700', 'text-yellow-800', 'text-yellow-900',
    'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
    'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
    'border-amber-200', 'border-amber-400', 'border-amber-100',
    'border-gray-200', 'border-gray-300',
    'border-green-300', 'border-blue-300',
    'hover:bg-amber-700', 'hover:bg-gray-100',
    'hover:text-gray-900', 'hover:text-amber-600',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd8a5',
          300: '#f8bc6d',
          400: '#f59532',
          500: '#f2750a',
          600: '#e35905',
          700: '#bc4208',
          800: '#95340e',
          900: '#782c0f',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
