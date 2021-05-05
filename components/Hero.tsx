const Hero = () => {
  return (
    <section
      id='hero'
      className='relative h-screen w-full overflow-hidden flex flex-col justify-center items-center'
    >
      <video
        className='z-0 object-cover absolute top-0 left-0 w-full h-screen'
        src='/img/hero-bg.mp4'
        muted
        loop
        autoPlay
      ></video>
      <div className='relative z-10 flex flex-col justify-center items-center'>
        <h1 className='font-headingMain text-8xl text-green-600'>
          Jools Barnett
        </h1>
        <h2 className='font-bodyMain text-gray-200 tracking-widest'>
          Frontend Web Developer
        </h2>
        <p className='max-w-lg mt-10 font-bodyMain text-gray-100 text-center'>
          Hi there! I'm Jools Barnett and I'm a frontend web developer. Though,
          you've probably already figured that out.
        </p>
        <p className='max-w-lg mt-10 font-bodyMain text-gray-100 text-center'>
          I specialise in React (specifically NextJS) and I'm on the lookout for
          a job as a junior developer. I'm also fullstack capable, with a real
          passion for creative problem solving.
        </p>
        <div className='py-5 mt-10'>
          <a href='/#ubooze'>
            <button className='py-4 px-14 mr-5 uppercase font-bold text-xs tracking-wider bg-gray-50 text-gray-800 transition duration-150 hover:bg-gray-800 hover:text-gray-50 font-bodyEandE'>
              My Projects
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
