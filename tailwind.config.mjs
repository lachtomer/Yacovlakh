/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Frank Ruhl Libre"', '"David Libre"', 'Georgia', 'serif'],
        sans: ['Assistant', 'Heebo', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: {
          50: '#fcfbfa',
          100: '#f7f5f0',
          200: '#ede8df',
          300: '#ded5c5',
          400: '#c5b8a0',
        },
        ink: {
          50: '#f4f4f5',
          100: '#e4e4e7',
          200: '#d4d4d8',
          400: '#a1a1aa',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#0f0f11',
        },
        burgundy: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          600: '#9b2034',
          700: '#7c1626',
          800: '#63121f',
          900: '#4c0d17',
        },
        gold: {
          500: '#c59b27',
          600: '#a8801d',
          700: '#8c6716',
        }
      }
    },
  },
  plugins: [],
};
