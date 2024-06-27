import { useState, useEffect } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollVertical, setScrollVertical] = useState(0);

  const handleOnScrollY = () => {
    // console.log(window.scrollY)
    setScrollVertical(window.scrollY);
  };
  useEffect(() => {
    // at the end of render, following code runs
    window.addEventListener('scroll', handleOnScrollY);

    // cleaning up the events
    return () => {
      window.removeEventListener('scroll', handleOnScrollY);
    };
  }, []);
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
        <Footer scrollVertical={scrollVertical} />
      </div>
    </>
  );
}

export default App;
