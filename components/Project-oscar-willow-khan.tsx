import Link from 'next/link';

const ProjectOscarWillowKhan = () => {
  return (
    <section className='relative h-screen w-full bg-owk bg-center bg-cover bg-no-repeat section'>
      <div className='absolute top-0 left-0 bg-white opacity-40 h-screen w-full z-0'></div>
      <div className='absolute top-0 left-0 md:ml-32 xl:ml-0 lg:ml-0 -ml-10 h-screen w-full flex flex-col justify-center md:items-start items-center'>
        <div className='lg:ml-64 lg:pl-40 w-3/5 md:w-1/2 lg:w-3/5 lg:max-w-3xl 2xl:max-w-5xl 2xl:w-1/2 2xl:pl-64 iPadPro:max-w-lg iPad:max-w-sm iPadWidescreen:max-w-lg iPadProWidescreen:pl-0 iPadPro:pl-0 iPhoneSE:-ml-3 -ml-7 xs:-ml-20 mt-0 xs:mt-12 iPadPro:ml-10 iPadProWidescreen:ml-0 iPad:-ml-20 iPadAirWidescreen:-ml-20 iPadWidescreen:ml-10 iPadWidescreen:pl-0'>
          <div className='flex flex-col justify-center items-center 2xl:ml-64 iPadWidescreen:ml-0 iPadPro:-ml-0 iPadProWidescreen:-ml-0 -ml-4 xs:-ml-0 iPad:text-center'>
            <h1 className='font-headingOwk text-xl md:text-2xl 2xl:w-3/4 text-center iPad:text-4xl iPadAir:text-4xl lg:text-5xl 2xl:text-6xl font-black uppercase text-blue-800'>
              Oscar, Willow & Khan
            </h1>
            <h2 className='font-headingOwk text-gray-800 font-black tracking-wider text-xs md:text-sm lg:text-lg'>
              Finance & Investments
            </h2>
            <p className='lg:w-2/3 mt-10 xs:mt-5 lg:text-base md:text-sm iPadAir:text-base text-xs font-semibold font-bodyOwk text-gray-900 text-center'>
              A single page website for fake investment company{' '}
              <span className='italic'>Oscar, Willow & Khan</span>, built in
              Next.js and Tailwind CSS.
            </p>
            <div className='md:w-3/4 w-5/6 xs:w-auto lg:w-auto iPad:w-auto lg:py-5 mt-10 xs:mt-5 flex lg:flex-row flex-col items-center'>
              <a
                href='https://oscarwillowkhan.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                <button className='py-4 px-14 lg:mr-5 lg:mb-0 mb-5 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE focus:outline-none'>
                  Visit Site
                </button>
              </a>
              <Link href='/projects/oscar-willow-khan'>
                <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE focus:outline-none'>
                  More Information
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOscarWillowKhan;
