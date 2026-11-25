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
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#FAF9F6',
        ink: {
          DEFAULT: '#1C1A17',
          soft: '#3D3A35',
          muted: '#6E675D',
          faint: '#9A938A',
        },
        hairline: '#E4E0D8',
        surface: '#FFFFFF',
        pine: {
          DEFAULT: '#1D5C3F',
          dark: '#14452F',
          soft: '#EAF2ED',
        },
      },
      maxWidth: {
        prose: '72rem',
      },
    },
  },
  plugins: [],
}
