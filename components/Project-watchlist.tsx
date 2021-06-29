import Link from 'next/link';

const ProjectWatchlist = () => {
  return (
    <section className='h-screen w-full bg-watchlistPortrait lg:bg-watchlist iPadPro:bg-watchlistPortrait iPadProWidescreen:bg-watchlistPortrait iPad:bg-watchlistPortrait iPadWidescreen:bg-watchlistPortrait bg-center bg-cover bg-no-repeat section flex'>
      <div className='flex flex-col justify-center lg:items-end iPadProWidescreen:items-center xl:mr-16 2xl:mr-64 xs:-mt-0 -mt-28 iPadProWidescreen:mr-0'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-headingWatchlist text-5xl lg:text-7xl text-red-700'>
            Watchlist
          </h1>
          <h2 className='font-bodyWatchlist text-sm lg:text-base text-gray-800 tracking-wider'>
            A serverless Next.js web app
          </h2>
          <p className='max-w-lg mt-10 text-sm lg:px-0 px-5 lg:text-base font-bodyWatchlist text-gray-900 text-center'>
            A streaming movie search engine for finding out what movies on an{' '}
            <a
              className='underline text-blue-700'
              href='https://icheckmovies.com/'
              rel='noreferrer noopener'
              target='_blank'
            >
              icheckmovies.com
            </a>{' '}
            list are available for you to watch right now on Netflix and Amazon
            Prime Video.
          </p>
          <p className='max-w-lg mt-5 text-sm lg:px-0 px-5 lg:text-base font-bodyWatchlist text-gray-900 text-center'>
            Technologies used include Next.js, Serverless Functions, Context
            API, Axios and Cheerio.
          </p>
          <div className='flex lg:flex-row flex-col lg:py-5 mt-10'>
            <a
              href='https://watchlistmovies.vercel.app'
              target='_blank'
              rel='noreferrer'
            >
              <button className='py-4 px-14 lg:mr-5 mb-5 lg:mb-0 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE focus:outline-none'>
                Visit Site
              </button>
            </a>
            <Link href='/projects/watchlist'>
              <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE focus:outline-none'>
                More Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectWatchlist;
