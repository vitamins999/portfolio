import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const sidebar = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 0.5 },
  },
  closed: {
    opacity: 0,
  },
};

const Menu = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <motion.nav
      initial={false}
      animate={menuOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.5 }}
      className={`bg-gray-800 font-headingMain fixed right-0 top-0 w-80 md:w-108 h-full flex items-center text-gray-100`}
    >
      <motion.ul
        initial={false}
        animate={menuOpen ? 'open' : 'closed'}
        variants={sidebar}
        className='font-bold flex flex-col justify-center h-full pl-20'
      >
        <motion.li variants={sidebar}>
          <a
            href='/#home'
            onClick={() => setMenuOpen(false)}
            className='hover:text-green-300 transition ease-in-out duration-150 text-xl md:text-2xl tracking-tight leading-normal'
          >
            Home
          </a>
        </motion.li>
        <motion.li variants={sidebar}>
          <a
            href='/#about'
            onClick={() => setMenuOpen(false)}
            className='hover:text-green-300 transition ease-in-out duration-150 text-xl md:text-2xl tracking-tight leading-normal'
          >
            About
          </a>
        </motion.li>
        <motion.li variants={sidebar} className=''>
          <a
            href='/#ubooze'
            onClick={() => setMenuOpen(false)}
            className='hover:text-green-300 transition ease-in-out duration-150 text-xl md:text-2xl tracking-tight leading-normal'
          >
            Projects
          </a>
        </motion.li>
        <motion.li variants={sidebar} className='pt-3'>
          <Link href='/projects/ubooze'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-xs md:text-sm uppercase font-bodyMain pt-3 text-gray-400 tracking-widest leading-tight'
            >
              uBooze
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar} className='pt-3'>
          <Link href='/projects/watchlist'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-xs md:text-sm uppercase font-bodyMain pt-3 text-gray-400 tracking-widest leading-tight'
            >
              Watchlist
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar} className='pt-3'>
          <Link href='/projects/essence-and-elements'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-xs md:text-sm uppercase font-bodyMain pt-3 text-gray-400 tracking-widest leading-tight'
            >
              Essence & Elements
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar} className='pt-3 mb-10'>
          <Link href='/projects/oscar-willow-khan'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-xs md:text-sm uppercase font-bodyMain pt-3 text-gray-400 tracking-widest leading-tight'
            >
              Oscar, Willow & Khan
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar}>
          <a
            href='/#contact'
            onClick={() => setMenuOpen(false)}
            className='hover:text-green-300 transition ease-in-out duration-150 text-xl xl:text-2xl tracking-tight leading-normal'
          >
            Contact Me
          </a>
        </motion.li>
        <motion.li variants={sidebar}>
          <a
            href='/files/jools-barnett-cv.pdf'
            target='_blank'
            rel='noreferrer'
            className='hover:text-green-300 transition ease-in-out duration-150 text-xl xl:text-2xl tracking-tight leading-normal'
          >
            My CV
          </a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Menu;
