import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='fixed flex w-full justify-end md:bottom-10 bottom-5 z-10 xl:px-56 md:px-28 px-10 hover:text-green-700 transition ease-in-out duration-150'>
      <Link href='#'>
        <a>
          <Image src='/icons/github-logo-32.png' width={32} height={32} />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
