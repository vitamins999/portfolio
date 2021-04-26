import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='fixed flex w-full justify-end md:bottom-10 bottom-5 z-10 xl:px-56 md:px-28 px-10 hover:text-green-700 transition ease-in-out duration-150'>
      <Link href='#'>
        <a>Github</a>
      </Link>
    </footer>
  );
};

export default Footer;
