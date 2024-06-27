import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      {/* <!-- hero section --> */}
      {/* <Hero /> */}
      {/* <!-- skills --> */}
      {/* <Skills /> */}

      {/* <!-- projects --> */}
      {/* <Projects /> */}
      {/* <!-- about --> */}
      {/* <About /> */}
      {/* <!-- contact --> */}
      {/* <Contact /> */}

      {/* <!-- footer --> */}
    </>
  );
}

export default App;
