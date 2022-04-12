import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = () => {
    setSuccess(true);
    reset({ name: '', email: '', message: '' });
  };

  return (
    <section className='relative h-screen w-full bg-contactPortrait lg:bg-contact iPadPro:bg-top-4 bg-cover section'>
      <div className='flex flex-col justify-center items-center lg:px-0 px-5 iPadPro:ml-0 iPadProWidescreen:ml-80 iPadWidescreen:ml-92 lg:ml-108'>
        <h1 className='font-headingMain text-5xl iPadWidescreen:text-5xl lg:text-7xl text-red-700'>
          Contact Me
        </h1>
        <p className='lg:max-w-lg px-3 lg:px-0 lg:mt-10 mt-5 lg:text-base text-sm iPadWidescreen:text-sm font-bodyMain text-gray-900 text-center'>
          Have any questions or comments? No problem. Just submit the form below
          and I'll strive to get back to you as soon as possible.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          name='contact'
          method='POST'
          data-netlify='true'
          className='lg:py-5 mt-5 iPadWidescreen:py-0 flex flex-wrap justify-center max-w-2xl iPadWidescreen:max-w-lg'
        >
          <div className='p-2 w-1/2'>
            <div className='relative'>
              <label
                htmlFor='name'
                className='leading-7 md:text-sm text-xs text-gray-900 font-medium'
              >
                Name
              </label>
              <input
                {...register('name')}
                type='text'
                id='name'
                name='name'
                placeholder='eg. Jim Morrison'
                required
                className='w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 iPadWidescreen:text-sm text-sm lg:text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
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
                {...register('email')}
                type='email'
                id='email'
                name='email'
                placeholder='eg. jim.morrison@company.com'
                required
                className='w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 iPadWidescreen:text-sm text-sm lg:text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out shadow-inner'
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
                {...register('message')}
                id='message'
                name='message'
                required
                className='w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 iPadWidescreen:text-sm text-sm lg:text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-inner'
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
        <p
          className={`text-xs lg:text-base text-purple-700 ${
            success ? 'visible' : 'invisible'
          }`}
        >
          <span>Form submitted successfully!</span>
        </p>
        <p className='-mb-8 mt-5 text-xs lg:text-base'>
          Alternatively, please feel free to email me at:{' '}
          <a
            className='text-purple-700 underline'
            href='mailto:joolsbarnett@gmail.com'
            rel='noreferrer noopener'
            target='_blank'
          >
            joolsbarnett@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
