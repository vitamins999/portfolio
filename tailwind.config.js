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
        bodyUbooze: ['Crimson Text'],
        headingUbooze: ['Unica One'],
      },
      spacing: {
        84: '21rem',
        108: '27rem',
        116: '28rem',
        120: '30rem',
        128: '32rem',
        132: '34rem',
        144: '36rem',
      },
      screens: {
        iPadPro: { raw: '(width: 1024px) and (height: 1366px)' },
        iPadProWidescreen: { raw: '(width: 1366px) and (height: 1024px)' },
      },
      backgroundImage: (theme) => ({
        essence: "url('/img/project-tarot-bg.webp')",
        watchlist: "url('/img/project-watchlist-bg.webp')",
        owk: "url('/img/project-owk-bg.webp')",
        ubooze: "url('/img/project-ubooze-bg.webp')",
        about: "url('/img/about-bg.webp')",
        contact: "url('/img/contact-bg.webp')",
      }),
    },
  },
  variants: {
    extend: {},
    scrollSnapType: ['responsive'],
  },
  plugins: [require('tailwindcss-scroll-snap')],
};
