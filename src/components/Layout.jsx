import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <input type="checkbox" id="toggler" />
      <div className="wrapper">
        <label htmlFor="toggler">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- navbar --> */}
        <NavBar />
        <main className="main" style={{ minHeight: '50vh' }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
