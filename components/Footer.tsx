import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  menuOpen: boolean;
};

const Footer = ({ menuOpen }: Props) => {
  return (
    <footer
      className={`${
        menuOpen ? 'hidden' : 'null'
      } fixed flex w-full justify-end lg:bottom-10 bottom-5 z-10 lg:px-16 px-8 lg:py-4 py-2 hover:text-green-700 transition ease-in-out duration-150`}
    >
      <motion.a
        whileHover={{ translateY: -7 }}
        href='https://github.com/vitamins999/'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer'
      >
        <Image src='/icons/github-logo-32.png' width={32} height={32} />
      </motion.a>
    </footer>
  );
};

export default Footer;
