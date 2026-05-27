/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        // AWS-inspired amber accent on dark slate
        cloud: {
          50:  '#fff8eb',
          100: '#ffefc7',
          200: '#ffda89',
          300: '#ffbc45',
          400: '#ffa011',
          500: '#f07f00',
          600: '#cc5c00',
          700: '#a33d00',
          800: '#852f04',
          900: '#71270a',
          950: '#421100',
        },
        slate: {
          925: '#0d1117', // GitHub dark bg — deeper than 900
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in':    'fadeIn .25s ease-out',
        'slide-up':   'slideUp .3s ease-out',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' },            to: { opacity: '1' } },
        slideUp: { from: { transform: 'translateY(8px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
}
