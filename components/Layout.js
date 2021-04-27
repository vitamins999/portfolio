import { useState } from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Layout = ({ children, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Jools Barnett | {title}</title>
      </Head>
      <div className='font-bodyMain'>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div>{children}</div>
        <Footer />
      </div>
      <Menu menuOpen={menuOpen} />
    </>
  );
};

export default Layout;
