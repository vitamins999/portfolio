import { motion } from 'framer-motion';
import { fadeOutPage } from '../../animations/navigation';

import Layout from '../../components/Layout';

const EssenceAndElementsPage = () => {
  const title = 'Essence & Elements';

  return (
    <Layout title={title}>
      <motion.main
        variants={fadeOutPage}
        exit='exit'
        initial='initial'
        animate='animate'
        transition={{ duration: 0.75 }}
      >
        <section className='relative w-full h-96 lg:h-120 bg-essence bg-center'>
          <div className='absolute top-0 left-0 bg-gray-900 opacity-60 h-96 lg:h-120 w-full z-0'></div>
          <div className='absolute top-0 left-0 pb-12 lg:px-16 flex flex-col justify-center lg:flex-row lg:items-end lg:justify-between h-120 w-full'>
            <div className='text-yellow-400 text-center lg:text-left'>
              <h1 className='font-bodyMain text-lg lg:text-xl lg:pl-1 -mb-1'>
                Projects
              </h1>
              <h2 className='font-headingEandE text-4xl uppercase font-semibold text-gray-200 py-2 leading-tight'>
                Essence <span className='text-yellow-400'>& Elements</span>
              </h2>
            </div>
            <div className='flex lg:flex-row flex-col items-center lg:pb-2'>
              <a
                href='https://essenceandelements.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                <button className='py-4 px-14 lg:my-0 my-5 lg:mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                  Visit Site
                </button>
              </a>
              <a
                href='https://github.com/vitamins999/essence-and-elements'
                target='_blank'
                rel='noreferrer'
              >
                <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                  View Code on Github
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
                Next.js, Tailwind CSS, Framer Motion, GraphQL, Apollo
              </p>
            </div>
            <div className='py-3'>
              <h2 className='font-bodyMain text-xl font-semibold tracking-wide'>
                Backend
              </h2>
              <p className='font-bodyMain text-gray-700'>
                Node.js, Strapi, GraphQL
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
            <h3 className='text-3xl font-headingMain py-3'>
              Customer Specification
            </h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5 pb-1'>
              When the customer came to me, we outlined three major items that
              needed to be addressed with the finished site:
            </p>
            <ol className='list-decimal list-inside'>
              <li className='pt-2'>
                They needed to be able to advertise the three different services
                they offer (Tarot, Crystal Healing and Reiki).
              </li>
              <li className='pt-2'>
                They needed to be able to sell a limited range of products
                (bracelets and necklaces).
              </li>
              <li className='pt-2'>It needed to be cheap. Very cheap.</li>
            </ol>
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-headingMain py-3'>
              Solutions To Problems
            </h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              The most obvious solution to an e-commerce specification would
              have been to either create a complete fullstack e-commerce site
              with baskets and user accounts and a database and all that jazz
              (most probably a MERN or PERN stack with my skillset), or to
              simplify the workload and hand off most shopping functions to a
              solution like Shopify.
            </p>
            <p className='pt-5'>
              But those solutions are pricey, both through man hours to create
              the solution, and monthly subscription costs for APIs like
              Shopify, in addition to hosting. And whilst these costs can be
              mitigated by a lot of new businesses, these options were outside
              of my client's price range.
            </p>
            <p className='pt-5'>
              My original solution was to simplify everything and create a
              frontend only website. No backend, no database. Just a list of all
              the products they offer (stored as a simple Javascript Object in a
              data folder) with a link to buy the item that redirects to an Etsy
              page for the item (which the client had already created). The
              amount of different items is very small and does not change very
              often, making this solution have very little overhead.
            </p>
            <p className='pt-5'>
              However, I didn't like having all the product data located in the
              frontend, easily available for the user to see in the browser
              using the browser dev tools. Whilst there isn't an issue with
              download size currently (the file is tiny), if the business ever
              took off and needed to expand to hundreds, even thousands more
              products, the user would be expected to download that file every
              time so the website can populate.
            </p>
            <p className='pt-5'>
              Furthermore, if there were any fields in the products data file
              the business wanted to completely hide from the user, this
              wouldn't be possible, either.
            </p>
            <p className='pt-5'>
              So in the end, I settled on creating a seperate CMS backend, using
              Strapi, GraphQL and a PostgreSQL database hosted on{' '}
              <a
                className='underline text-blue-700'
                href='https://supabase.io/'
                rel='noreferrer noopener'
                target='_blank'
              >
                Supabase
              </a>
              .
            </p>
            <p className='pt-5'>
              Strapi is very quick to setup and thus it took no time at all to
              migrate over the small amount of currently existing data. GraphQL
              (with Apollo on the frontend) made requesting the data a very
              simple matter, since the majority of the queries are themselves
              very simple. And Supabase (on top of having a very generous free
              tier) is similarly very quick to set up and connect to from within
              Strapi.
            </p>
            <p className='pt-5'>
              Now I had the data hidden server side, and the frontend would only
              ever request what was needed. And most important of all: no extra
              costs to pass onto my client!
            </p>
            <p className='pt-5'>
              Lastly, as the client's services are personalised to the customer,
              and the client wanted to communicate directly with their customers
              through email, the pages for services were simplified to each
              having their own contact form that emails the client with all the
              necessary information the client would want from their customer.
              This allows the client to arrange payment for their services on
              their own (and allow for easy scaling up in the future to include
              integrated Paypal/Stripe functions in the website after the form
              submittal, if the client wishes to pay for more work).
            </p>
          </div>
          <div className='py-10'>
            <h3 className='text-3xl font-headingMain py-3'>Hosting</h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5'>
              To further reduce costs, the frontend is hosted on{' '}
              <a
                className='underline text-blue-700'
                href='https://netlify.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Netlify
              </a>
              . This meant the client did not have to pay for hosting.
            </p>
            <p className='pt-5'>
              Furthermore, Netlify offer serverless functions for contact forms,
              simplifying everything even further.
            </p>
            <p className='pt-5'>
              In another effort to reduce costs, the backend is hosted for free
              on{' '}
              <a
                className='underline text-blue-700'
                href='https://www.heroku.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Heroku
              </a>
              . Normally, Heroku's free tier would be problematic as the dynos
              power down after a short period of inactivity (and therefore the
              first request from the frontend could take up to 30 seconds after
              a period on inactivity), but I opted to use Next.js's Static Site
              Generation on the frontend, meaning data is only requested at
              build time, making this delay invisible to the user.
            </p>
            <p className='pt-5'>
              Now, this is only really useful as long as the page doesn't need
              to be built very often (which is fine currently, as the amount of
              items and frequency of change is small), but in the future,
              scaling up to implement Next.js's Incremental Static Generation in
              the frontend, and the cheapest Heroku tier (so the dyno won't
              power down) would be very simple to implement. This would allow
              more frequent use of the CMS to be reflected in real time on the
              frontend, with the speed of a static site, for very little extra
              cost.
            </p>
            <p className='pt-5'>
              Lastly, the PostgreSQL database is hosted on{' '}
              <a
                className='underline text-blue-700'
                href='https://supabase.io/'
                rel='noreferrer noopener'
                target='_blank'
              >
                Supabase
              </a>
              . They have an incredibly generous free tier, that is more than
              enough for the needs of this business.
            </p>
            <p className='pt-5'>
              All in all, the client did not have to pay anything for hosting.
              And that made them very happy.
            </p>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default EssenceAndElementsPage;
