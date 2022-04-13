const Hero = ({ fullpageApi }) => {
  return (
    <section className='relative h-screen w-full overflow-hidden flex flex-col justify-center items-center section lg:px-0 lg:pt-0 pt-10 px-10'>
      <video
        className='z-0 object-cover absolute top-0 left-0 w-full h-screen'
        src='/img/hero-bg.mp4'
        muted
        loop
        autoPlay
        data-autoplay
      ></video>
      <div className='relative z-10 flex flex-col justify-center items-center'>
        <h1 className='font-headingMain text-5xl md:text-5xl lg:text-8xl iPad:text-7xl iPadAir:text-7xl text-green-600'>
          Jools Barnett
        </h1>
        <h2 className='font-bodyMain lg:text-base iPadAir:text-base text-sm text-gray-200 tracking-widest'>
          Frontend Web Developer
        </h2>
        <p className='md:max-w-lg max-w-md lg:mt-10 md:mt-5 iPad:mt-10 iPadAir:mt-10 mt-10 lg:text-base iPadAir:text-base text-sm font-bodyMain text-gray-100 text-center'>
          Hi there! I'm Jools Barnett and I'm a frontend web developer. Though,
          you've probably already figured that out.
        </p>
        <p className='md:max-w-lg max-w-md lg:mt-10 mt-5 md:mb-0 mb-5 lg:text-base text-sm iPadAir:text-base font-bodyMain text-gray-100 text-center'>
          I specialise in React (specifically Next.js) and I'm on the lookout
          for a job as a junior developer. I'm also fullstack capable, with a
          real passion for creative problem solving.
        </p>
        <div className='lg:py-5 py-10 lg:mt-10 flex md:flex-row flex-col items-center'>
          <a
            href='/files/jools-barnett-cv.pdf'
            target='_blank'
            rel='noreferrer'
          >
            <button className='py-4 px-14 md:mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 focus:outline-none font-bodyEandE'>
              Checkout My CV
            </button>
          </a>
          <button
            onClick={() => {
              fullpageApi.moveTo(3);
            }}
            className='py-4 px-14 mt-5 md:mt-0 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 focus:outline-none font-bodyEandE'
          >
            My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
