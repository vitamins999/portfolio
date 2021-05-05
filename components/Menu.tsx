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
      className={`bg-gray-800 font-headingMain fixed right-0 top-0 w-60 xl:w-108 h-full flex items-center z-40 text-gray-100`}
    >
      <motion.ul
        initial={false}
        animate={menuOpen ? 'open' : 'closed'}
        variants={sidebar}
        className='font-bold flex flex-col justify-center h-full pl-20'
      >
        <motion.li variants={sidebar}>
          <Link href='/#hero'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-2xl tracking-tight leading-normal'
            >
              Home
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar}>
          <Link href='/#about'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-2xl tracking-tight leading-normal'
            >
              About
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar} className=''>
          <Link href='/#ubooze'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-2xl tracking-tight leading-normal'
            >
              Projects
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar} className='pt-3'>
          <Link href='/projects/ubooze'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-sm uppercase font-bodyMain pt-3 text-gray-400 tracking-widest leading-tight'
            >
              uBooze
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar} className='pt-3'>
          <Link href='/projects/watchlist'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-sm uppercase font-bodyMain pt-3 text-gray-400 tracking-widest leading-tight'
            >
              Watchlist
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar} className='pt-3'>
          <Link href='/projects/essence-and-elements'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-sm uppercase font-bodyMain pt-3 text-gray-400 tracking-widest leading-tight'
            >
              Essence & Elements
            </a>
          </Link>
        </motion.li>
        <motion.li variants={sidebar} className='pt-3 mb-10'>
          <Link href='/projects/oscar-willow-khan'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-sm uppercase font-bodyMain pt-3 text-gray-400 tracking-widest leading-tight'
            >
              Oscar, Willow & Khan
            </a>
          </Link>
        </motion.li>

        <motion.li variants={sidebar}>
          <Link href='/#contact'>
            <a
              onClick={() => setMenuOpen(false)}
              className='hover:text-green-300 transition ease-in-out duration-150 text-2xl tracking-tight leading-normal'
            >
              Contact Me
            </a>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Menu;
