import { motion } from 'framer-motion';
import { fadeOutPage } from '../../animations/navigation';

import Layout from '../../components/Layout';

const WatchlistPage = () => {
  const title = 'Watchlist';

  return (
    <Layout title={title}>
      <motion.main
        className='pb-10'
        variants={fadeOutPage}
        exit='exit'
        initial='initial'
        animate='animate'
        transition={{ duration: 0.75 }}
      >
        <section className='relative w-full h-96 lg:h-120 bg-watchlist bg-center'>
          <div className='absolute top-0 left-0 pb-12 lg:px-16 flex flex-col justify-center lg:flex-row lg:justify-between lg:items-end h-120 w-full'>
            <div></div>
            <div>
              <div className='text-red-700 lg:py-10 text-center lg:text-right iPadPro:text-right iPadWidescreen:text-right'>
                <h1 className='font-bodyMain text-lg lg:text-xl lg:pl-1 -mb-3 lg:-mb-0'>
                  Projects
                </h1>
                <h2 className='font-headingWatchlist text-6xl lg:text-7xl'>
                  Watchlist
                </h2>
              </div>
              <div className='flex lg:flex-row flex-col items-center'>
                <a
                  href='https://watchlistmovies.vercel.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='py-4 px-14 lg:my-0 my-5 lg:mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                    Visit Site
                  </button>
                </a>
                <a
                  href='https://github.com/vitamins999/watchlist-2.0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                    View Code on Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full flex justify-center lg:px-0 px-10'>
          <div className='text-center text-gray-900 lg:py-10 py-5 lg:max-w-3xl'>
            <h1 className='font-bodyMain text-2xl py-5'>Technologies Used</h1>
            <div className='py-3'>
              <h2 className='font-bodyMain text-xl font-semibold tracking-wide'>
                Frontend
              </h2>
              <p className='font-bodyMain text-gray-700'>
                Next.js, TailwindCSS, Framer Motion, React Hook Form, Context
                API
              </p>
            </div>
            <div className='py-3'>
              <h2 className='font-bodyMain text-xl font-semibold tracking-wide'>
                Backend
              </h2>
              <p className='font-bodyMain text-gray-700'>
                Next.js Serverless, Axios, Cheerio
              </p>
            </div>
          </div>
        </section>
        <section className='lg:px-84 iPadPro:px-32 iPadWidescreen:px-32 px-10 lg:pb-10 pt-5 pb-5'>
          <div>
            <h3 className='text-3xl font-headingMain py-3'>
              Why Does This Exist?
            </h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              There are two main sites on the web that have the ability to
              curate lists of films:{' '}
              <a
                className='underline text-blue-700'
                href='https://letterboxd/'
                rel='noreferrer noopener'
                target='_blank'
              >
                Letterboxd
              </a>{' '}
              and{' '}
              <a
                className='underline text-blue-700'
                href='https://icheckmovies.com/'
                rel='noreferrer noopener'
                target='_blank'
              >
                icheckmovies.com
              </a>
              .
            </p>
            <p className='pt-5'>
              Now, whilst Letterboxd already has the ability to see what films
              on a curated list are available to stream, the site itself is more
              intended as a social media platform, rather than having lists of
              films as the website's main purpose. As such, their list function
              is a little disorganised and very much centered on user curated
              lists.
            </p>
            <p className='pt-5'>
              icheckmovies, on the other hand, has a far more organised
              selection of lists, many of them officially curated by the admin.
              However, they do not have the ability to see what films on those
              lists are available for streaming.
            </p>
            <p className='pt-5'>
              There are many people out there (including myself) who prefer to
              use icheckmovies when deciding on what film they're in the mood to
              watch, based on what films in a given list they haven't seen yet.
            </p>
            <p className='pt-5'>
              <span className='italic'>Watchlist</span> was created to solve
              this problem.
            </p>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>
              How Does It Work?
            </h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              Scraping and API calls to the{' '}
              <a
                className='underline text-blue-700'
                href='https://themoviedb.org/'
                rel='noreferrer noopener'
                target='_blank'
              >
                The Movie Database
              </a>
              .
            </p>
            <p className='pt-5 pb-1'>To put it simply:</p>
            <ol className='list-decimal list-inside'>
              <li className='pt-2'>
                The user enters the URL of an{' '}
                <a
                  className='underline text-blue-700'
                  href='https://icheckmovies.com/'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  icheckmovies.com
                </a>{' '}
                list (i.e.{' '}
                <a
                  className='underline text-blue-700'
                  href='https://icheckmovies.com/lists/imdbs+top+250/'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  https://icheckmovies.com/lists/imdbs+top+250/
                </a>
                ) and a region.
              </li>
              <li className='pt-2'>
                Axios scrapes the url's page. This data is then used to create
                an object containing the list title and an array of the listed
                films and their release year.
              </li>
              <li className='pt-2'>
                The app loops through this array, making two API calls to The
                Movie Database for each film. The first call gets the relevant
                metadata for the film, including the ID for the film on The
                Movie Database. The second call uses this ID along with the
                region, to find out what streaming providers in that region are
                currently streaming the film. If it's either Netflix or Amazon
                Prime, this information along with the relevant metadata is
                pushed to an All Films array.
              </li>
              <li className='pt-2'>
                Once the loop has finished, the content of the All Films array
                is displayed to the user.
              </li>
            </ol>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>Hosting</h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              <span className='italic'>Watchlist</span> is hosted on{' '}
              <a
                className='underline text-blue-700'
                href='https://vercel.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Vercel.com
              </a>{' '}
              in order to take advantage of Next.js's serverless functions.
            </p>
            <p className='pt-5'>
              This allows the API calls that scrape{' '}
              <a
                className='underline text-blue-700'
                href='https://icheckmovies.com/'
                rel='noreferrer noopener'
                target='_blank'
              >
                icheckmovies.com
              </a>{' '}
              and get the relevant data from{' '}
              <a
                className='underline text-blue-700'
                href='https://themoviedb.org/'
                rel='noreferrer noopener'
                target='_blank'
              >
                The Movie Database
              </a>{' '}
              to be abstracted away from the client, without having to build a
              specific backend (in Express, for example) for what one could
              consider some relatively simple backend code.
            </p>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default WatchlistPage;
