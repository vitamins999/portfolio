module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bodyMain: ['Source Sans Pro'],
        headingMain: ['Playfair Display'],
        bodyEandE: ['Montserrat'],
        headingEandE: ['Libre Baskerville'],
      },
      spacing: {
        84: '21rem',
        108: '27rem',
      },
      screens: {
        iPadPro: { raw: '(width: 1024px) and (height: 1366px)' },
        iPadProWidescreen: { raw: '(width: 1366px) and (height: 1024px)' },
      },
      backgroundImage: (theme) => ({
        essence: "url('/img/project-tarot-bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
