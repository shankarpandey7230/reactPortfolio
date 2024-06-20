import React from 'react';
import Portfolio from '../assets/Portfolio.png';

const Project = ({ img, github, url, projectitle, description }) => {
  return (
    <div className="project-card">
      <div className="top">
        <img src={img} alt="" width="100%" />
      </div>
      <div className="bottom container">
        <div className="links flex flex-center">
          <a href={github} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href={url}>
            <i className="fa-brands fa-chrome"></i>
          </a>
        </div>
        <h3>{projectitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
