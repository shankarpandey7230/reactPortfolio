import React from 'react';
import Admin from '../assets/Admin Pannel.png';
import Portfolio from '../assets/Portfolio.png';
import Github from '../assets/Github Users.png';
import PizzaOrder from '../assets/PizzaOrder.png';
import Movie from '../assets/Movies.png';
import Ecommerce from '../assets/Ecommerce.png';
import Title from './Title';
import Project from './Project';

const Projects = () => {
  const projectList = [
    {
      img: Portfolio,
      github: 'https://github.com/shankarpandey7230/FinalPortfolio',
      url: 'https://shankarpandey7230.github.io/FinalPortfolio/',
      projectitle: 'Personal Portfolio',
      description: 'Techstack: HTML, CSS, Javascript, React',
    },
    {
      img: Admin,
      github: 'https://github.com/shankarpandey7230/Adminpanel',
      url: 'https://adminpanel-git-master-shankarpandey7230.vercel.app/',
      projectitle: 'Admin Panel',
      description: 'Techstack: HTML, CSS, Javascript, React, MUI',
    },
    {
      img: Github,
      github: 'https://github.com/shankarpandey7230/githubusers',
      url: 'https://react-githubusers1.netlify.app/login',
      projectitle: 'Github Users Listing',
      description: 'Techstack: HTML, CSS, Javascript, React, Auth0',
    },
    {
      img: PizzaOrder,
      github: 'https://github.com/shankarpandey7230/PizzaApp',
      url: 'https://goodpizzaorder.netlify.app/',
      projectitle: 'Pizza Order',
      description: 'Techstack: HTML, CSS, Javascript, React,',
    },
    {
      img: Movie,
      github: 'https://github.com/shankarpandey7230/Movix',
      url: 'https://movix-git-master-shankarpandey7230.vercel.app/',
      projectitle: 'Movie Website',
      description: 'Techstack: HTML, CSS, Javascript, React, REDUX',
    },
    {
      img: Ecommerce,
      github: 'https://github.com/shankarpandey7230/react-comfysloth',
      url: 'https://comfy-slothtesting.netlify.app/',
      projectitle: 'E-Commerce Website',
      description: 'Techstack: HTML, CSS, Javascript, React, REDUX, STRIPE',
    },
  ];

  return (
    <section className="projects container" id="projects">
      <Title title="My Projects" />

      <div className="grid project-container">
        <Project
          img={Portfolio}
          github="https://github.com/shankarpandey7230/FinalPortfolio"
          url="https://shankarpandey7230.github.io/FinalPortfolio/"
          projectitle="Personal Portfolio"
          description="Techstack: HTML, CSS, Javascript, React"
        />
        {projectList.map((project, i) => {
          return <Project key={i} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
