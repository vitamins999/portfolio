import Link from 'next/link';

const ProjectOscarWillowKhan = () => {
  return (
    <section className='relative h-screen w-full bg-owk bg-center bg-no-repeat section'>
      <div className='flex ml-32'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-headingOwk text-6xl font-black uppercase text-blue-800'>
            Oscar, Willow & Khan
          </h1>
          <h2 className='font-headingOwk text-gray-800 font-black tracking-wider text-lg'>
            Finance & Investments
          </h2>
          <p className='max-w-lg mt-10 font-bodyOwk text-gray-900 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste
            possimus quae est molestiae nam quasi voluptatem dolorem. Minima,
            ratione.
          </p>
          <div className='py-5 mt-10'>
            <button className='py-4 px-14 mr-5 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE'>
              Visit Site
            </button>
            <Link href='/projects/oscar-willow-khan'>
              <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE'>
                More Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOscarWillowKhan;
