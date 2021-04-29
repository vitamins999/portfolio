import Link from 'next/link';

const ProjectUbooze = () => {
  return (
    <section className='relative h-screen w-full flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-0 bg-ubooze bg-center bg-no-repeat h-screen w-full z-0'></div>
      <div className='absolute top-0 left-0 bg-gray-900 opacity-60 h-screen w-full z-0'></div>
      <div className='z-10 flex flex-col justify-center items-center'>
        <h1 className='font-headingUbooze text-8xl text-green-600'>Ubooze</h1>
        <h2 className='font-bodyUbooze text-gray-200 tracking-widest'>
          A fullstack NextJS web app
        </h2>
        <p className='max-w-lg mt-10 font-bodyUbooze text-gray-100 text-center'>
          Alcohol is expensive. That's why I created uBooze -- a price
          comparison website for alcohol prices at your local supermarkets.
          Simply type in your postcode and see what drinks are cheapest near
          you.
        </p>
        <p className='max-w-lg mt-5 font-bodyUbooze text-gray-100 text-center'>
          Technologies used include NextJS, PostgreSQL, Express, TailwindCSS and
          PassportJS.
        </p>
        <div className='py-5 mt-10'>
          <button className='py-4 px-14 mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE'>
            Visit Site
          </button>
          <Link href='/projects/ubooze'>
            <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE'>
              More Information
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectUbooze;
