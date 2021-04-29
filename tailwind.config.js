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
        bodyWatchlist: ['Overpass'],
        headingWatchlist: ['Permanent Marker'],
        bodyOwk: ['Source Sans Pro'],
        headingOwk: ['Playfair Display'],
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
        watchlist: "url('/img/project-watchlist-bg.jpg')",
        owk: "url('/img/project-owk-bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
