const About = () => {
  return (
    <section className='h-screen w-full bg-about bg-cover bg-right lg:bg-center section flex flex-row items-center justify-center'>
      <div className='w-1/2'></div>
      <div className='flex flex-col justify-center items-center w-full lg:px-0 lg:py-0 px-5 lg:ml-72 xl:ml-80 2xl:ml-108 iPadWidescreen:ml-60 iPadProWidescreen:ml-80 iPadPro:ml-56 py-auto'>
        <div className='flex flex-col justify-center items-center pb-10 lg:pb-16 iPadWidescreen:max-w-md'>
          <h1 className='font-headingMain text-4xl iPadWidescreen:text-5xl lg:text-5xl 2xl:text-7xl text-red-700'>
            About Me
          </h1>
          <h2 className='font-bodyMain text-sm iPadWidescreen:text-base lg:text-base text-gray-800 tracking-wider'>
            Education & History
          </h2>
          <p className='max-w-lg mt-5 lg:mt-10 text-xs iPadWidescreen:text-sm lg:text-base font-bodyMain text-gray-900 text-center'>
            I have an LLB(Hons) in Law and a Micromasters in Cybersecurity.
          </p>
          <p className='max-w-lg mt-5 text-xs iPadWidescreen:text-sm  lg:text-base font-bodyMain text-gray-900 text-center'>
            My previous career was as a freelance writer, author and
            screenwriter. However, in 2019, I decided I needed a career change
            to something far more stable.
          </p>
          <p className='max-w-lg mt-5 text-xs iPadWidescreen:text-sm  lg:text-base font-bodyMain text-gray-900 text-center'>
            Computers and technology had always been a passion of mine, often
            being at the forefront of my creative material. As such, a career in
            frontend development was the perfect solution, combining the
            creativity I crave with the soft skills of problem solving and
            analysis I honed with my law degree.
          </p>
          <p className='max-w-lg mt-5 text-xs iPadWidescreen:text-sm  lg:text-base font-bodyMain text-gray-900 text-center'>
            I've been programming and designing websites ever since, and I
            couldn't be happier.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center max-w-lg'>
          <h1 className='font-headingMain iPadWidescreen:text-5xl text-4xl lg:text-5xl 2xl:text-7xl text-red-700'>
            Skills
          </h1>
          <h2 className='font-bodyMain text-sm iPadWidescreen:text-base lg:text-base text-gray-800 tracking-wider'>
            Technology Proficiences
          </h2>
          <ul className='pt-5 text-xs iPadWidescreen:text-sm lg:text-base'>
            <li className='py-2 text-gray-900'>
              <span className='font-semibold'>Languages</span>: Javascript,
              Typescript, HTML, CSS, SQL, Python, C# (learning)
            </li>
            <li className='py-2 text-gray-900'>
              <span className='font-semibold'>Frameworks</span>: React, Next.js,
              Redux, Express, Node, Tailwind CSS, SASS
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
