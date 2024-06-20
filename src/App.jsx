import { useState } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <!-- dark mode toggler button --> */}

      <input type="checkbox" id="toggler" />
      <div className="wrapper">
        <label htmlFor="toggler">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- navbar --> */}
        <NavBar />

        {/* <!-- hero section --> */}
        <Hero />
        {/* <!-- skills --> */}
        <Skills />

        {/* <!-- projects --> */}
        <Projects />
        {/* <!-- about --> */}
        <About />
        {/* <!-- contact --> */}
        <Contact />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
