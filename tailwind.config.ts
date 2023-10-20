import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      margin: {
        '509px': '31.8125rem',
        '72px': '4.5rem',
        '-1px': '-0.0625rem',
        '-92px': '-5.75rem',
      },
      minWidth: {
        '8xl': '120rem',
      },
      inset: {
        'bg-center-fix': 'calc((100vw - 1920px)/2)',
      },
      colors: {
        richBlack: '#020a0a',
        plum: '#910f1a',
        cayenne: '#dd1507',
        raspberry: '#df1440',
        citrus: '#f58713',
        tumeric: '#f6bb22',
        aubergine: '#700022',
        limeZest: '#b6cb43',
        sugar: '#fff7e8',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        display: [
          ['League Spartan', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        desktopxl: '120rem',
      },
    },
  },
  plugins: [],
} satisfies Config
