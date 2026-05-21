/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        cyber: {
          50:  '#f0fafa',
          100: '#d0f4f4',
          200: '#a1e8e8',
          300: '#63d5d5',
          400: '#2ebdbd',
          500: '#00FFFF',
          600: '#00cccc',
          700: '#009999',
          800: '#006666',
          900: '#003333',
        },
        neon: {
          pink:   '#FF2D78',
          purple: '#9B30FF',
          green:  '#39FF14',
          blue:   '#00FFFF',
          orange: '#FF6B00',
        },
        dark: {
          50:  '#f8f8f8',
          100: '#e0e0e6',
          200: '#c2c2cc',
          300: '#9292a0',
          400: '#606070',
          500: '#3a3a4a',
          600: '#252535',
          700: '#1a1a28',
          800: '#10101c',
          900: '#080810',
          950: '#04040c',
        },
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)
        `,
        'glow-radial': 'radial-gradient(ellipse at center, rgba(0,255,255,0.15) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, #04040c 0%, #10101c 50%, #0a0a1a 100%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 3s infinite',
        'blink': 'blink 1s step-end infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, 2px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0,255,255,0.3), 0 0 60px rgba(0,255,255,0.1)',
        'cyber-sm': '0 0 10px rgba(0,255,255,0.2)',
        'neon-pink': '0 0 20px rgba(255,45,120,0.4)',
        'neon-purple': '0 0 20px rgba(155,48,255,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
