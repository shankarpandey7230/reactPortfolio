import { useState } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

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
        <section className="about" id="about">
          <h2 className="title">
            <span>About Me</span>
          </h2>
          <div className="container flex about-content">
            <div className="flex-center myImg">
              <img
                src="./assets/Profile.png"
                alt="Shankar's Speech"
                width="100%"
              />
            </div>
            <div className="my-bio container">
              <h2>Shankar Pandey</h2>
              <p>
                A Master Graduate with highly skilled React.js front-end
                developer with sound knowledge of creating responsive and
                user-friendly web applications. Proficient in HTML, CSS,
                JavaScript, and React.js. Strong understanding of Redux, JSX,
                and webpack.
              </p>
              <p>
                Most <strong>Importantly,</strong> I prefer to solve the
                problems which ultimately occurs in programming.I am a curious
                and a continuous learner with creativity and Innovation. I love
                to make positive impact through my skills and works as I always
                focus on attention to detail and craftmanship.Overall, I am
                characterized by a deep love htmlFor coding, commitment to
                excellence, desire to inovate things. It fuels my motivation
                driving to success with vibrant dnd dynamic nature of the
                software development community.
              </p>
              <p>Australia</p>
              <div>
                <div className="tag">Interest</div>
                <div className="flex">
                  <span>Coding</span>
                  <span>Reading</span>
                  <span>Travel</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- contact --> */}
        <section className="contact" id="contact">
          <h2 className="title">
            <span>Contact</span>
          </h2>
          <div className="flex social">
            <a
              href="https://www.linkedin.com/in/shankar-pandey/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/shankar.pandey.988/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://github.com/shankarpandey7230" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-mobile"></i>
            </a>
          </div>
          <h3>OR</h3>
          <div className="flex-center">
            <a
              href="mailto:shankarpandey7230@gmail.com"
              className="email-section flex-center"
            >
              <span>shankarpandey7230@gmail.com</span>
              <div className="email-icon flex-center">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </a>
          </div>
        </section>

        {/* <!-- footer --> */}
        <footer className="flex-center">
          <div className="top flex">
            <div className="links">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Skills</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="socials">
              <h3>Social Links</h3>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/shankar-pandey/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/shankar.pandey.988/">
                    FaceBook
                  </a>
                </li>
                <li>
                  <a href="https://github.com/shankarpandey7230">GitHub</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            Copyright all reserved 2024 ||
            <a
              href="https://www.linkedin.com/in/shankar-pandey/"
              target="_blank"
            >
              @Shankar Pandey
            </a>
          </div>
        </footer>
        <a href="">
          <div className="goUp flex-center">
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
