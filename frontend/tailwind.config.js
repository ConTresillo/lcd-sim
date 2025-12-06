/** @type {import('tailwindcss').Config} */
module.exports = { // Corrected from 'export default' to 'module.exports'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00F0FF',
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        mono: ['VT323', 'monospace'],
        tech: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px #00F0FF, 0 0 20px #00F0FF',
      },

      // CURSOR BLINKING FIX: ADD KEYFRAMES AND ANIMATION
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' }, // Slightly dimmer instead of fully invisible
        }
      },
      animation: {
        // Defines the animation duration and iteration.
        pulse: 'pulse 1.5s ease-in-out infinite', // 1.5s for realistic LCD blink speed
      }
    },
  },
  plugins: [],
}