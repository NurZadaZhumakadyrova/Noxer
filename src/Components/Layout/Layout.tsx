import Header from '../Header/Header.tsx';
import AdSection from '../AdSection/AdSection.tsx';
import React, { type PropsWithChildren } from 'react';
import Footer from '../Footer/Footer.tsx';

const Layout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header/>
      <AdSection/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;