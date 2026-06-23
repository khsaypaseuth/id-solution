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
          primary: '#0B3B75',
          secondary: '#1E88E5',
          accent: '#FF9800',
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
