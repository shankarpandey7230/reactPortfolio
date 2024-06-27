import React from 'react';
import Title from './Title';
import Layout from './Layout';

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Title title="Skills" />
      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{ color: 'orange' }}></i>
          <span>HTML</span>
        </div>
        <div>
          <i className="fa-brands fa-css3" style={{ color: 'blue' }}></i>
          <span>CSS</span>
        </div>
        <div>
          <i className="fa-brands fa-js" style={{ color: 'yellow' }}></i>
          <span>JAVASCRIPT</span>
        </div>
        <div>
          <i className="fa-brands fa-react"></i>
          <span>React</span>
        </div>
        <div>
          <i className="fa-brands fa-github"></i>
          <span>Github</span>
        </div>
        <div>
          <i className="fa-brands fa-figma" style={{ color: 'purple' }}></i>
          <span>Figma</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
