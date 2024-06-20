import React from 'react';
import Admin from '../assets/Admin Pannel.png';
import Portfolio from '../assets/Portfolio.png';
import Github from '../assets/Github Users.png';
import PizzaOrder from '../assets/PizzaOrder.png';
import Movie from '../assets/Movies.png';
import Title from './Title';

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <Title title="My Projects" />

      <div className="grid project-container">
        <div className="project-card">
          <div className="top">
            <img src={Portfolio} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links flex flex-center">
              <a href="https://github.com/shankarpandey7230/FinalPortfolio">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://shankarpandey7230.github.io/FinalPortfolio/">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript, React</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={Admin} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links flex flex-center">
              <a
                href="https://github.com/shankarpandey7230/Adminpanel"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://adminpanel-git-master-shankarpandey7230.vercel.app/"
                target="_blank"
              >
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Admin Panel</h3>
            <p>Techstack: HTML, CSS, Javascript, React, MUI</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={Github} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links flex flex-center">
              <a
                href="https://github.com/shankarpandey7230/githubusers"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://react-githubusers1.netlify.app/login"
                target="_blank"
              >
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Github Users Listing</h3>
            <p>Techstack: HTML, CSS, Javascript, React, Auth0</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={PizzaOrder} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links flex flex-center">
              <a
                href="https://github.com/shankarpandey7230/PizzaApp"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://goodpizzaorder.netlify.app/" target="_blank">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Pizza Order</h3>
            <p>Techstack: HTML, CSS, Javascript, React</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={Movie} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links flex flex-center">
              <a
                href="https://github.com/shankarpandey7230/Movix"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://movix-git-master-shankarpandey7230.vercel.app/"
                target="_blank"
              >
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Movies Website</h3>
            <p>Techstack: HTML, CSS, Javascript, React,REDUX</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src="./Projects/Ecommerce.png" alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links flex flex-center">
              <a
                href="https://github.com/shankarpandey7230/react-comfysloth"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="https://comfy-slothtesting.netlify.app/" target="_blank">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Movies Website</h3>
            <p>Techstack: HTML, CSS, Javascript, React,REDUX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
