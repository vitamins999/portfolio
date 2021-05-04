import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='fixed flex w-full justify-end md:bottom-10 bottom-5 z-10 px-16 py-4 hover:text-green-700 transition ease-in-out duration-150'>
      <Link href='#'>
        <motion.a whileHover={{ translateY: -7 }} className='cursor-pointer'>
          <Image src='/icons/github-logo-32.png' width={32} height={32} />
        </motion.a>
      </Link>
    </footer>
  );
};

export default Footer;
