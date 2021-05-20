import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

type Props = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <header className='flex w-full md:text-lg sm:text-base text-xs z-50 fixed top-0 right-0 justify-between md:px-16 px-8 md:py-12 py-5 iPadPro:px-16 iPadPro:py-12 iPadProWidescreen:px-16 iPadProWidescreen:py-12 items-center'>
      <Link href='/'>
        <a className='font-headingMain text-green-100 lg:text-5xl text-3xl uppercase font-bold cursor-pointer'>
          <span className='text-green-400'>J</span>
          <span>B</span>
        </a>
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='focus:outline-none'
      >
        <svg
          className={`${
            menuOpen ? 'text-gray-100' : 'text-gray-100'
          } w-8 h-8 cursor-pointer hover:text-green-500 transition ease-in-out duration-150`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          ></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
