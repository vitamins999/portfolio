import Link from 'next/link';

const ProjectUbooze = () => {
  return (
    <section className='relative h-screen w-full bg-ubooze bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center section'>
      <div className='absolute top-0 left-0 bg-gray-900 opacity-60 h-screen w-full z-0'></div>
      <div className='absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center'>
        <div className='z-10 flex flex-col justify-center items-center px-5 md:px-0'>
          <h1 className='font-headingUbooze text-5xl lg:text-8xl iPad:text-8xl iPadWidescreen:text-8xl iPadPro:text-8xl iPadProWidescreen:text-8xl text-green-600'>
            Ubooze
          </h1>
          <h2 className='font-bodyUbooze text-gray-200 tracking-widest md:-mt-0 -mt-2'>
            A fullstack NextJS web app
          </h2>
          <p className='md:max-w-lg mt-10 text-sm md:text-base font-bodyUbooze text-gray-100 text-center'>
            Alcohol is expensive. That's why I created uBooze -- a price
            comparison website for alcohol prices at your local supermarkets.
            Simply type in your postcode and see what drinks are cheapest near
            you.
          </p>
          <p className='md:max-w-lg max-w-md mt-5 text-sm md:text-base font-bodyUbooze text-gray-100 text-center'>
            Technologies used include NextJS, PostgreSQL, Express, TailwindCSS
            and PassportJS.
          </p>
          <div className='lg:py-5 mt-10 flex md:flex-row flex-col'>
            <button className='py-4 px-14 md:mr-5 md:mb-0 mb-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
              Visit Site
            </button>
            <Link href='/projects/ubooze'>
              <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE focus:outline-none'>
                More Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectUbooze;
