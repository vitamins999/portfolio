import { useState, ReactNode } from 'react';

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
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
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Layout;
