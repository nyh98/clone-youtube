/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: [
          'video video side',
          'video video side',
          'comment comment side',
        ],
      },
      gridTemplateColumns: {
        layout: 'repeat(3,1fr)',
      },
      gridTemplateRows: {
        layout: '',
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
};
