import { motion } from 'framer-motion';
import { fadeOutPage } from '../../animations/navigation';

import Layout from '../../components/Layout';

const UboozePage = () => {
  const title = 'uBooze';

  return (
    <Layout title={title}>
      <motion.main
        variants={fadeOutPage}
        exit='exit'
        initial='initial'
        animate='animate'
        transition={{ duration: 0.75 }}
      >
        <section className='relative w-full h-96 lg:h-120 bg-ubooze bg-center'>
          <div className='absolute top-0 left-0 bg-gray-900 opacity-60 h-96 lg:h-120 w-full z-0'></div>
          <div className='absolute top-0 left-0 pb-12 lg:px-16 flex flex-col justify-center lg:flex-row lg:justify-between lg:items-end h-120 w-full'>
            <div className='text-green-600 text-center lg:text-left'>
              <h1 className='font-bodyMain text-lg lg:text-xl lg:pl-1 -mb-1'>
                Projects
              </h1>
              <h2 className='font-headingUbooze text-7xl'>Ubooze</h2>
            </div>
            <div className='flex lg:flex-row flex-col items-center'>
              <a href='#' target='_blank' rel='noreferrer'>
                <button className='py-4 px-14 lg:my-0 mt-3 lg:mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                  Visit Site
                </button>
              </a>
              <a
                href='https://github.com/vitamins999/uBooze'
                target='_blank'
                rel='noreferrer'
              >
                <button className='py-4 px-14 lg:my-0 my-3 lg:mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                  View Website Code on Github
                </button>
              </a>
              <a
                href='https://github.com/vitamins999/ubooze-scraper'
                target='_blank'
                rel='noreferrer'
              >
                <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                  View Scraper Code on Github
                </button>
              </a>
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
                Next.js, Redux, React Hook Form, React Query, Tailwind CSS,
                Framer Motion
              </p>
            </div>
            <div className='py-3'>
              <h2 className='font-bodyMain text-xl font-semibold tracking-wide'>
                Backend
              </h2>
              <p className='font-bodyMain text-gray-700'>
                Node.js, Express.js, Passport.js, bcrypt, JSON Web Tokens,
                OAuth, Axios, Puppeteer, Cheerio, SendGrid, Knex.js,
                Objection.js
              </p>
            </div>
            <div className='py-3'>
              <h2 className='font-bodyMain text-xl font-semibold tracking-wide'>
                Database
              </h2>
              <p className='font-bodyMain text-gray-700'>PostgreSQL</p>
            </div>
          </div>
        </section>
        <section className='lg:px-84 iPadPro:px-32 iPadWidescreen:px-32 px-10 lg:pb-10 pt-5 pb-5'>
          <div>
            <p className='pt-5'>
              Alcohol is expensive. That's why I created{' '}
              <span className='italic'>Ubooze</span> -- a price comparison
              website for alcohol prices at your local UK supermarkets. Simply
              type in your postcode and see what drinks are cheapest near you.{' '}
            </p>
            <p className='pt-5'>
              Don't care about finding local prices? No problem.{' '}
              <span className='italic'>Ubooze</span> also includes the ability
              to let the user select which supermarkets they want to compare
              against each other. No postcode necessary.{' '}
            </p>
            <p className='pt-5'>
              And that's not all. The <span className='italic'>Ubooze</span>{' '}
              website also includes full login/register functionality for user
              accounts (as well as Facebook and Google sign ins through OAuth),
              allowing users to favourite products and create their own public
              favourite alcohol pages, for easy access to their favourite
              product price comparisons in the future.
            </p>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>Repositories</h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              <span className='italic'>Ubooze</span> functions through the use
              of two repositories:
            </p>
            <p className='pt-5'>
              1. The Web App (
              <a
                href='https://github.com/vitamins999/uBooze'
                target='_blank'
                rel='noreferrer'
                className='underline text-blue-700'
              >
                found here
              </a>
              )
            </p>
            <p>
              {' '}
              2. The Supermarket Webscraper Utility (
              <a
                href='https://github.com/vitamins999/ubooze-scraper'
                target='_blank'
                rel='noreferrer'
                className='underline text-blue-700'
              >
                found here
              </a>
              )
            </p>
            <p className='pt-5'>
              The <span className='italic'>Ubooze</span> Supermarket Scraper
              Utility is a custom made Node.js web scraper for UK supermarket
              alcohol prices, with PostgreSQL database integration for insertion
              and updating of those prices.
            </p>
            <p className='pt-5'>
              The scraper is intended for use with the{' '}
              <span className='italic'>Ubooze</span> web app (this repository),
              in order keep the website's database up to date, with the most
              recent alcohol prices and offers.
            </p>
            <p className='pt-5'>It uses Node.js to run in the command line.</p>
            <p className='pt-5'>
              For more information, please refer to the{' '}
              <a
                href='https://github.com/vitamins999/ubooze-scraper'
                target='_blank'
                rel='noreferrer'
                className='underline text-blue-700'
              >
                Ubooze Web Scraper Repository
              </a>
              .
            </p>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>
              Why Does This Exist?
            </h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              As I already mentioned above, alcohol is expensive. It is also
              something that routinely changes price quite dramatically from
              shop to shop, further complicated by any special offers offered by
              these shops.
            </p>
            <p className='pt-5'>
              Due to this high level of expense, it also means that saving money
              on alcohol will have a greater effect on an overall shopping bill
              than saving money on most other food related products. Something
              of keen interest to financial trying times, like... well, right
              now.
            </p>
            <p className='pt-5'>
              So wouldn't it be nice if there was a website to compare alcohol
              prices across supermarkets at a glance?
            </p>
            <p className='pt-5'>
              Enter <span className='italic'>Ubooze</span>.
            </p>
            <p className='pt-5'>
              I conducted extensive market research, and discovered that not
              only was there both a need and a gap in the market for this
              product, but prospective users also valued supermarkets that were
              closer to them over supermarkets further away.
            </p>
            <p className='pt-5'>
              This lead to the final piece of the puzzle -- a price comparison
              website for supermarket alcohol prices where the user could
              either:
            </p>
            <p className='pt-5'>1. Select which supermarkets to compare; or</p>
            <p>
              {' '}
              2. Enter a radius and a postcode, and compare supermarkets only
              found within that radius.
            </p>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>
              How Does It Work?
            </h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              <span className='italic'>Ubooze</span> is made up of two distinct
              parts:
            </p>
            <p className='pt-5'>
              1. A full stack Web App with REST API (
              <a
                href='https://github.com/vitamins999/uBooze'
                target='_blank'
                rel='noreferrer'
                className='underline text-blue-700'
              >
                found here
              </a>
              )
            </p>
            <p>
              2. A custom made Web Scraper Utility (
              <a
                href='https://github.com/vitamins999/ubooze-scraper'
                target='_blank'
                rel='noreferrer'
                className='underline text-blue-700'
              >
                found here
              </a>
              )
            </p>
            <p className='pt-5'>
              The web scraper utility is a Node.js program that runs in the
              command line, which the website admin runs in order to populate
              the database, whenever they feel it appropriate. Its purpose is to
              scrape current alcohol prices and offers from the most popular UK
              supermarkets' websites.
            </p>
            <p className='pt-5'>
              After a successful scrape, it connects to a PostgreSQL database
              hosted in the cloud (I decided to use{' '}
              <a
                className='underline text-blue-700'
                href='https://supabase.com/'
                rel='noreferrer noopener'
                target='_blank'
              >
                Supabase
              </a>
              , due to the very generous free tier allowing me to minimise
              hosting costs) and updates already existing products to their new
              price and/or offer, or inserts new products into the database, to
              be manually linked up and made visible outside the database, in
              the future.
            </p>
            <p className='pt-5'>
              The Web App is a full stack web application, utilising Next.js on
              the client and Express.js on the server.
            </p>
            <p className='pt-5'>
              When the user visits the website, they have the option of either
              selecting price comparison by clicking the supermarkets to
              compare, or having the website choose which supermarkets to
              compare by entering the user's postcode and a radius of 1-3 miles.
            </p>
            <p className='pt-5'>
              If the user selects the supermarkets to compare, a query is made
              to the database to select all products where the 'supermarket'
              field corresponds to those supermarkets.
            </p>
            <p className='pt-5'>
              If the user enters their postcode and a radius, a request
              containing the postcode is sent by the REST API on the server to
              the Mapbox API. This returns the latitude and longitude of the
              postcode. These coordinates are then sent as a request, along with
              the radius converted to kilometres, to the Foursquare API. This
              returns a JSON back to the server, of the supermarkets found
              within the radius of those coordinates.
            </p>
            <p className='pt-5'>
              The website then queries the database, as above, with this list of
              supermarkets.
            </p>
            <p className='pt-5'>
              In both case, the client receives a paginated list of items from
              the database, that correspond to the relevant supermarket(s).
            </p>
            <p className='pt-5'>
              The website also features the ability to search for a specific
              drink. This will query the database and return matching products
              from all supermarkets and their comparative prices.
            </p>
            <p className='pt-5'>
              Furthermore, the website also allows users to register accounts
              and login (along with OAuth integration for Google and Facebook).
              From here, they can choose to favourite a product, whereby
              favourited productIDs are saved in the database for that user. If
              they return to their favourite page in the future, a request is
              made to the database to return products that are found in their
              favourite product field, thus populating their product page with
              all of their favourite products.
            </p>
            <p className='pt-5'>
              Essentially, <span className='italic'>Ubooze</span> is a standard
              CRUD full stack web app, where the database's data (with the
              exception of user data) is populated by a Node.js command line web
              scraper.
            </p>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>Hosting</h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              The frontend is hosted on{' '}
              <a
                className='underline text-blue-700'
                href='https://vercel.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Vercel.com
              </a>{' '}
              in order to take advantage of their free Next.js hosting and image
              optimisation.
            </p>
            <p className='pt-5'>
              The backend is hosted on{' '}
              <a
                className='underline text-blue-700'
                href='https://heroku.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Heroku.com
              </a>
              's hobby tier. This is because it allows for 100% uptime, whereas
              the free tier will power down after 30 minutes.
            </p>
            <p className='pt-5'>
              The PostgreSQL database is hosted on{' '}
              <a
                className='underline text-blue-700'
                href='https://supabase.com/'
                rel='noreferrer noopener'
                target='_blank'
              >
                Supabase
              </a>
              , due to their very generous free tier, which is more than enough
              for the needs of the site.
            </p>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default UboozePage;
