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
    <section className='relative h-screen w-full bg-contactPortrait lg:bg-contact iPadPro:bg-top-4 section bg-cover md:bg-top-0 bg-top-4 iPadWidescreen:bg-top-4'>
      <div className='flex flex-col justify-center xl:mt-0 mt-0 lg:-mt-20 surfacePro7Widescreen:-mt-20 iPad:-mt-20 iPadAir:-mt-20 iPadAirWidescreen:-mt-32 iPhoneSE:mt-16 items-center md:px-32 lg:px-0 px-5 iPadPro:ml-0 iPadAirWidescreen:ml-80 iPadProWidescreen:ml-80 iPadWidescreen:ml-92 lg:ml-56 xl:ml-108'>
        <h1 className='font-headingMain text-5xl iPadWidescreen:text-5xl lg:text-7xl text-red-700'>
          Contact Me
        </h1>
        <p className='lg:max-w-lg px-3 lg:px-0 lg:mt-10 mt-5 lg:text-base text-sm iPadWidescreen:text-sm font-bodyMain text-gray-900 text-center'>
          Have any questions or comments? No problem. Just submit the form below
          and I'll strive to get back to you as soon as possible.
        </p>
        <p className='visible md:invisible mt-5 text-center lg:-mt-20 md:-mt-10 2xl:-mt-10 iPad:-mt-7 iPadPro:-mt-7 iPadWidescreen:-mt-7 iPadProWidescreen:-mt-7 iPadProWidescreen:-mb-0 text-sm lg:text-sm'>
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
        <p
          className={`text-sm lg:text-sm text-purple-700 -mb-5 mt-5 ${
            success ? 'visible md:invisible' : 'invisible'
          }`}
        >
          <span>Form submitted successfully!</span>
        </p>
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          netlify-honeypot='bot-field'
          className='lg:py-5 mt-5 iPadWidescreen:py-0 flex flex-wrap justify-center max-w-2xl iPadWidescreen:max-w-lg'
        >
          <input type='hidden' name='form-name' value='contact' />
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
                id='message'
                name='message'
                required
                className='w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 iPadWidescreen:text-sm text-sm lg:text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-inner'
              ></textarea>
            </div>
          </div>
          <div className='p-2'>
            <p className='hidden'>
              <label>
                Don't fill this out if you're human: <input name='bot-field' />
              </label>
            </p>
            <button
              type='submit'
              className='w-full py-4 px-14 mr-5 uppercase font-bold text-xs tracking-wider bg-gray-800 text-gray-50 transition duration-150 hover:bg-green-500 hover:text-gray-800 font-bodyEandE'
            >
              Send
            </button>
          </div>
        </form>
        <p
          className={`text-xs lg:text-sm text-purple-700 ${
            success ? 'md:visible invisible' : 'invisible'
          }`}
        >
          <span>Form submitted successfully!</span>
        </p>
        <p className='md:visible invisible -mb-8 mt-10 text-center md:mt-5 iPadProWidescreen:mt-0 iPadProWidescreen:-mb-0 text-xs lg:text-sm iPadAir:text-sm iPadAirWidescreen:text-base'>
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
