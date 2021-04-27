import Link from 'next/link';
import { motion } from 'framer-motion';

const Menu = ({ menuOpen }) => {
  return (
    <motion.nav
      initial={false}
      animate={menuOpen ? { x: 0 } : { x: 500 }}
      transition={{ type: 'tween' }}
      className={`bg-gray-700 font-headingMain fixed right-0 top-0 w-60 xl:w-108 h-full flex items-center justify-center z-40 text-gray-100`}
    >
      <ul className='text-2xl'>
        <li>
          <Link href='/#hero'>
            <a className='hover:text-green-300 transition ease-in-out duration-150'>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/#about'>
            <a className='hover:text-green-300 transition ease-in-out duration-150'>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href='/#projects'>
            <a className='hover:text-green-300 transition ease-in-out duration-150'>
              Projects
            </a>
          </Link>
          <ul>
            <li>
              <Link href='/projects/ubooze'>
                <a className='hover:text-green-300 transition ease-in-out duration-150'>
                  uBooze
                </a>
              </Link>
            </li>
            <li>
              <Link href='/projects/watchlist'>
                <a className='hover:text-green-300 transition ease-in-out duration-150'>
                  Watchlist
                </a>
              </Link>
            </li>
            <li>
              <Link href='/projects/essence-and-elements'>
                <a className='hover:text-green-300 transition ease-in-out duration-150'>
                  Essence & Elements
                </a>
              </Link>
            </li>
            <li>
              <Link href='/projects/oscar-willow-khan'>
                <a className='hover:text-green-300 transition ease-in-out duration-150'>
                  Oscar, Willow & Khan
                </a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href='/#contact'>
            <a className='hover:text-green-300 transition ease-in-out duration-150'>
              Contact Me
            </a>
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Menu;
