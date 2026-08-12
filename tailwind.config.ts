import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2A2B6D',
          secondary: '#3F418A',
          accent: '#F5B719',
        },
        ink: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-lao)', 'system-ui', 'sans-serif'],
        lao: ['var(--font-lao)', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
};

export default config;
