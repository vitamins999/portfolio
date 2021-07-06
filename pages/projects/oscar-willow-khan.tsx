import { motion } from 'framer-motion';
import { fadeOutPage } from '../../animations/navigation';

import Layout from '../../components/Layout';

const OscarWillowKhanPage = () => {
  const title = 'Oscar, Willow & Khan';

  return (
    <Layout title={title}>
      <motion.main
        variants={fadeOutPage}
        exit='exit'
        initial='initial'
        animate='animate'
        transition={{ duration: 0.75 }}
      >
        <section className='relative w-full h-96 lg:h-120 bg-owk bg-center'>
          <div className='absolute top-0 left-0 bg-white opacity-40 h-96 lg:h-120 w-full z-0'></div>
          <div className='absolute top-0 left-0 pb-12 lg:px-16 flex flex-col justify-center lg:flex-row lg:items-end lg:justify-between h-120 w-full'>
            <div className='text-blue-800 text-center lg:text-left'>
              <h1 className='font-bodyMain text-lg lg:text-xl lg:pl-1 -mb-1 font-semibold'>
                Projects
              </h1>
              <h2 className='font-headingOwk text-4xl lg:text-5xl iPadPro:text-4xl iPadPro:max-w-xs iPadWidescreen:text-4xl iPadWidescreen:max-w-xs font-black uppercase text-blue-800'>
                Oscar, Willow & Khan
              </h2>
            </div>
            <div className='flex lg:flex-row flex-col items-center'>
              <a
                href='https://oscarwillowkhan.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                <button className='py-4 px-14 lg:my-0 my-5  lg:mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                  Visit Site
                </button>
              </a>
              <a
                href='https://github.com/vitamins999/oscar-willow-khan-investments'
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
                Next.js, TailwindCSS, Framer Motion, React Hook Form, React
                Scroll
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
              It's pretty simple, really. I wanted a reason to showcase my
              frontend development skills for a single page website.
            </p>
            <p className='pt-5'>
              I chose the subject of an investment firm because the professional
              nature of the field meant that I could 'flex my UI/UX muscles' via
              a more formal design. Furthermore, as a semi-complex subject
              matter, the information would need to be easily parsable to the
              average potential customer. I reasoned this would be best suited
              to a single page website, so as to not overwhelm them, whilst also
              making any services and contact information easy to find.
            </p>
          </div>
          <div className='py-10'>
            <h3 className='text-3xl font-headingMain py-3'>
              Why Use React/Next.js For Such a Simple Website?
            </h3>
            <div className='border-t w-full pb-7'></div>
            <p className='pt-5 pb-1'>
              It may seem like overkill to use React for a single page website,
              but there were three primary reasons:
            </p>
            <ol className='list-decimal list-inside'>
              <li className='pt-2'>
                On a purely personal level, I'm faster developing in a Next.js
                environment. I've used it extensively and thus knew I could bash
                the project out in a vastly reduced time, simply because I
                needed to think less.
              </li>
              <li className='pt-2'>
                Similarly, I'm well versed with Framer Motion. Using React meant
                I could rely on this library for animations, and thus spend less
                time thinking about how to do what I needed to do, and spend
                more time doing what I needed to do.
              </li>
              <li className='pt-2'>
                For a single page website split into multiple sections, I liked
                the idea of writing those sections as their own components and
                then just importing them into the main index.js file. This
                approach felt more organised to me, making it easier to jump
                around and edit, whilst also making any reordering of where
                sections sit on the page mind numblingly simple.
              </li>
            </ol>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default OscarWillowKhanPage;
