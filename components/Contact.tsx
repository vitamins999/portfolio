const Contact = () => {
  return (
    <section id='contact' className='relative h-screen w-full grid grid-cols-3'>
      <div className='absolute top-0 left-0 bg-contact bg-cover h-screen w-full z-0'></div>
      <div className='z-10 flex flex-col justify-center items-center col-start-2 col-end-4'>
        <h1 className='font-headingMain text-7xl text-red-700'>Contact Me</h1>
        <p className='max-w-lg mt-10 font-bodyMain text-gray-900 text-center'>
          Have any questions or comments? No problem. Just submit the form below
          and I'll strive to get back to you as soon as possible.
        </p>
        <form className='py-5 mt-5 flex flex-wrap justify-center max-w-2xl'>
          <div className='p-2 w-1/2'>
            <div className='relative'>
              <label
                htmlFor='name'
                className='leading-7 md:text-sm text-xs text-gray-900 font-medium'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='eg. Jim Morrison'
                required
                className='w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
              />
            </div>
          </div>
          <div className='p-2 w-1/2'>
            <div className='relative'>
              <label
                htmlFor='email'
                className='leading-7 md:text-sm text-xs text-gray-900 font-medium'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='eg. jim.morrison@company.com'
                required
                className='w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
              />
            </div>
          </div>
          <div className='p-2 w-full'>
            <div className='relative'>
              <label
                htmlFor='message'
                className='leading-7 md:text-sm text-xs text-gray-900 font-medium'
              >
                Questions or comments
              </label>
              <textarea
                id='message'
                name='message'
                required
                className='w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-inner'
              ></textarea>
            </div>
          </div>
          <div className='p-2'>
            <button
              type='submit'
              className='py-4 px-14 mr-5 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-green-500 hover:text-gray-800 font-bodyEandE'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
