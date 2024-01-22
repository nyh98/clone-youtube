/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: [
          'video video side',
          'comment comment side',
          'comment comment side',
        ],
      },
      gridTemplateColumns: {
        layout: 'repeat(3,1fr)',
      },
      gridTemplateRows: {
        layout: '1fr',
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
};
