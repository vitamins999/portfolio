import Link from 'next/link';

const ProjectEssenceAndElements = () => {
  return (
    <section className='relative h-screen bg-essence w-full flex flex-col justify-center items-center section'>
      <div className='absolute top-0 left-0 bg-gray-900 opacity-60 h-screen w-full z-0'></div>
      <div className='absolute top-0 left 0 h-screen w-full flex flex-col justify-center items-center'>
        <div className='z-10 max-w-xl'>
          <h1 className='font-headingEandE text-7xl uppercase font-semibold text-gray-200 py-2 leading-tight'>
            Essence <span className='text-yellow-400'>& Elements</span>
          </h1>
          <p className='font-HeadingEandE font-semibold text-gray-200 text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            repellat suscipit culpa sapiente vel laudantium fuga dolor expedita
            quos maxime.
          </p>
          <div className='py-5 mt-10'>
            <button className='py-4 px-14 mr-5 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-gray-50 hover:text-gray-800 font-bodyEandE focus:outline-none'>
              Visit Site
            </button>
            <Link href='/projects/essence-and-elements'>
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

export default ProjectEssenceAndElements;
