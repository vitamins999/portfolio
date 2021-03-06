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
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
      </Head>
      <div className='font-bodyMain'>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div>{children}</div>
        <Footer menuOpen={menuOpen} />
      </div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Layout;
