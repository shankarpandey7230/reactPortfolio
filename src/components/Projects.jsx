import React from 'react';

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <h2 className="title">
        <span>My Projects</span>
      </h2>

      <div className="grid project-container">
        <div className="project-card">
          <div className="top">
            <img src="./Projects/Portfolio.png" alt="" width="100%" />
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
            <img src="./Projects/Admin Pannel.png" alt="" width="100%" />
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
            <img src="./Projects/Github Users.png" alt="" width="100%" />
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
            <img src="./Projects/PizzaOrder.png" alt="" width="100%" />
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
            <img src="./Projects/Movies.png" alt="" width="100%" />
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
