import Link from 'next/link';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className='flex w-full md:text-lg sm:text-base text-xs z-50 fixed top-0 right-0 justify-between xl:px-56 md:px-28 px-10 py-10 items-center'>
      <Link href='/'>
        <a className='font-headingMain uppercase font-bold cursor-pointer hover:text-green-700 transition ease-in-out duration-150'>
          Jools Barnett
        </a>
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='focus:outline-none'
      >
        <svg
          className='text-gray-900 w-6 h-6 cursor-pointer hover:text-green-700 transition ease-in-out duration-150'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
