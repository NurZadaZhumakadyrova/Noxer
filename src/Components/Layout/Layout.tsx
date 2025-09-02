import Header from '../Header/Header.tsx';
import React, { type PropsWithChildren } from 'react';
import Footer from '../Footer/Footer.tsx';
import "./Layout.css";

const Layout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="app-container">
      <Header/>
      <main className="main-content">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;