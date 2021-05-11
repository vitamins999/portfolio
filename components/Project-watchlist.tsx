import Link from 'next/link';

const ProjectWatchlist = () => {
  return (
    <section className='h-screen w-full bg-watchlist bg-center bg-no-repeat section flex'>
      <div className='flex flex-col justify-center items-end mr-64'>
        <div className='flex flex-col justify-center items-center'>
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
            <button className='py-4 px-14 mr-5 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE focus:outline-none'>
              Visit Site
            </button>
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
