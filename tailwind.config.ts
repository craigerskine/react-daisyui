import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          'primary-content': '#FFFFFF',
          'secondary': '#DA1B2C',
          'secondary-content': '#FFFFFF',
          'accent': '#3B822E',
          'accent-content': '#FFFFFF',
          'neutral': '#242424',
          'base-100': '#FFFFFF',
          'info': '#3192D3',
          'info-content': '#FFFFFF',
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
