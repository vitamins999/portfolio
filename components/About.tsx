const About = () => {
  return (
    <section id='about' className='relative h-screen w-full grid grid-cols-2'>
      <div className='absolute top-0 left-0 bg-about bg-cover h-screen w-full z-0'></div>
      <div className='z-10 flex flex-col justify-center items-center col-start-2'>
        <div className='flex flex-col justify-center items-center pb-16'>
          <h1 className='font-headingMain text-7xl text-red-700'>About Me</h1>
          <h2 className='font-bodyMain text-gray-800 tracking-wider'>
            Education & History
          </h2>
          <p className='max-w-lg mt-10 font-bodyMain text-gray-900 text-center'>
            I have an LLB(Hons) in Law and a Micromasters in Cybersecurity.
          </p>
          <p className='max-w-lg mt-5 font-bodyMain text-gray-900 text-center'>
            My previous career was as a freelance writer, author and
            screenwriter. However, in 2019, I decided I needed a career change
            to something far more stable.
          </p>
          <p className='max-w-lg mt-5 font-bodyMain text-gray-900 text-center'>
            Computers and technology had always been a passion of mine, often
            being at the forefront of my creative material. As such, a career in
            frontend development was the perfect solution, combining the
            creativity I crave with the soft skills of problem solving and
            analysis I honed with my law degree.
          </p>
          <p className='max-w-lg mt-5 font-bodyMain text-gray-900 text-center'>
            I've been programming and designing websites ever since, and I
            couldn't be happier.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-headingMain text-7xl text-red-700'>Skills</h1>
          <h2 className='font-bodyMain text-gray-800 tracking-wider'>
            Technology Proficiences
          </h2>
          <ul className='pt-5'>
            <li className='py-2 text-gray-900'>
              <span className='font-semibold'>Languages</span>: Javascript,
              Typescript, HTML, CSS, SQL, Python, C# (currently learning)
            </li>
            <li className='py-2 text-gray-900'>
              <span className='font-semibold'>Frameworks</span>: React, NextJS,
              Express, TailwindCSS
            </li>
            <li className='py-2 text-gray-900'>
              <span className='font-semibold'>Databases</span>: PostgreSQL,
              MySQL, MongoDB
            </li>
            <li className='py-2 text-gray-900'>
              <span className='font-semibold'>Other</span>: Git, Github, Visual
              Studio Code
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
