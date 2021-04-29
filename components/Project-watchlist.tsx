import Link from 'next/link';

const ProjectWatchlist = () => {
  return (
    <section className='relative h-screen w-full grid grid-cols-2'>
      <div className='absolute top-0 left-0 bg-watchlist bg-center bg-no-repeat h-screen w-full z-0'></div>
      <div className='z-10 flex flex-col justify-center items-center col-start-2'>
        <h1 className='font-headingWatchlist text-7xl text-red-700'>
          Watchlist
        </h1>
        <h2 className='font-bodyWatchlist text-gray-800 tracking-wider'>
          A serverless NextJS web app
        </h2>
        <p className='max-w-lg mt-10 font-bodyWatchlist text-gray-900 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste
          possimus quae est molestiae nam quasi voluptatem dolorem. Minima,
          ratione.
        </p>
        <div className='py-5 mt-10'>
          <button className='py-4 px-14 mr-5 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE'>
            Visit Site
          </button>
          <Link href='/projects/watchlist'>
            <button className='py-4 px-14 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE'>
              More Information
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectWatchlist;
