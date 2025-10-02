/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'audiowide': ['var(--font-audiowide)', 'sans-serif'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
        'press-start': ['var(--font-press-start-2p)', 'monospace'],
      },
      colors: {
        'orange': '#ff6600',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 102, 0, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 102, 0, 0.6), 0 0 30px rgba(255, 102, 0, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
