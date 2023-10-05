import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F8F8F8',
          200: '#F3F3F3',
          300: '#DDD',
          400: '#C8C8C8',
          500: '#989898',
          600: '#686868',
          700: '#383838',
          800: '#242424',
          900: '#080808',
        },
        standard: {
          100: '#CFF3F9',
          200: '#CFF3F9',
          300: '#A2D6DD',
          400: '#45A5B5',
          500: '#00758E',
          600: '#205460',
          700: '#205460',
          800: '#205460',
          900: '#205460',
        },
        warning: {
          100: '#FFE7E5',
          200: '#FFE7E5',
          300: '#FFAFAF',
          400: '#EF5656',
          500: '#DA1B2C',
          600: '#A51426',
          700: '#A51426',
          800: '#A51426',
          900: '#A51426',
        },
        confirmation: {
          100: '#DAF4D4',
          200: '#DAF4D4',
          300: '#ACDBA2',
          400: '#68B75F',
          500: '#3B822E',
          600: '#2C5E20',
          700: '#2C5E20',
          800: '#2C5E20',
          900: '#2C5E20',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    logs: true,
    darkTheme: 'prose-light',
    themes: [
      {
        'prose-light': {
          'primary': '#00758E',
          'primary-content': '#FFF',
          'secondary': '#DA1B2C',
          'secondary-content': '#FFF',
          'accent': '#3B822E',
          'accent-content': '#FFF',
          'neutral': '#242424',
          'neutral-content': '#FFF',
          'base-100': '#FFF',
          'info': '#3192D3',
          'info-content': '#FFF',
          'success': '#68B75F',
          'success-content': '#242424',
          'warning': '#E5D676',
          'warning-content': '#242424',
          'error': '#EF5656',
          'error-content': '#242424',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.1875rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'none',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
          '--input-size-xs': '1rem',
          '--input-size-sm': '1.5rem',
          '--input-size-md': '2rem',
          '--input-size-lg': '3rem',
          '.btn,.btn-md': {
            'height': 'var(--input-size-md)',
            'min-height': 'var(--input-size-md)',
          },
          '.btn-xs': {
            'height': 'var(--input-size-xs)',
            'min-height': 'var(--input-size-xs)',
          },
          '.btn-sm': {
            'height': 'var(--input-size-sm)',
            'min-height': 'var(--input-size-sm)',
          },
          '.btn-lg': {
            'height': 'var(--input-size-lg)',
            'min-height': 'var(--input-size-lg)',
          },
          '.btn-square,.btn-circle': {
            'width': 'var(--input-size-md)',
          },
          '.btn-square.btn-xs,.btn-circle.btn-xs': {
            'width': 'var(--input-size-xs)',
          },
          '.btn-square.btn-sm,.btn-circle.btn-sm': {
            'width': 'var(--input-size-sm)',
          },
          '.btn-square.btn-lg,.btn-circle.btn-lg': {
            'width': 'var(--input-size-lg)',
          },
          '.file-input,.select,.input': {
            'height': 'var(--input-size-md)',
            'min-height': 'auto',
          },
          '.file-input.file-input-xs,.select.select-xs,.input.input-xs': {
            'height': 'var(--input-size-xs)',
          },
          '.file-input.file-input-sm,.select.select-sm,.input.input-sm': {
            'height': 'var(--input-size-sm)',
          },
          '.file-input.file-input-lg,.select.select-lg,.input.input-lg': {
            'height': 'var(--input-size-lg)',
          },
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
export default config
