const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-1': 'left 1rem',
      'left-2': 'left 2rem',
      'left-3': 'left 3rem',
      'left-4': 'left 4rem',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 4rem',
    },
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
        xs: '568px',
        iPad: { raw: '(width: 768px) and (height: 1024px)' },
        iPadWidescreen: { raw: '(width: 1024px) and (height: 768px)' },
        iPadPro: { raw: '(width: 1024px) and (height: 1366px)' },
        iPadProWidescreen: { raw: '(width: 1366px) and (height: 1024px)' },
        ...defaultTheme.screens,
      },
      backgroundImage: (theme) => ({
        essence: "url('/img/project-tarot-bg.webp')",
        watchlist: "url('/img/project-watchlist-bg.webp')",
        watchlistPortrait: "url('/img/project-watchlist-bg-portrait.webp')",
        owk: "url('/img/project-owk-bg.webp')",
        ubooze: "url('/img/project-ubooze-bg.webp')",
        about: "url('/img/about-bg.webp')",
        contact: "url('/img/contact-bg.webp')",
        contactPortrait: "url('/img/contact-bg-portrait.webp')",
      }),
    },
  },
  variants: {
    extend: {},
    scrollSnapType: ['responsive'],
  },
  plugins: [require('tailwindcss-scroll-snap')],
};
