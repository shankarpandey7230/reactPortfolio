import React from 'react';
import Profile from '../assets/Profile.png';
import Title from './Title';

const About = () => {
  return (
    <section className="about  mt-5" id="about">
      <Title title="About" />
      <div className="container flex about-content">
        <div className="flex-center myImg">
          <img
            src={Profile}
            alt="Shankar's Speech"
            width="100%"
            style={{ 'margin-top': '-17rem' }}
          />
        </div>
        <div className="my-bio container">
          <h2>Shankar Pandey</h2>
          <p>
            A Master Graduate with highly skilled React.js front-end developer
            with sound knowledge of creating responsive and user-friendly web
            applications. Proficient in HTML, CSS, JavaScript, and React.js.
            Strong understanding of Redux, JSX, and webpack.
          </p>
          <p>
            Most <strong>Importantly,</strong> I prefer to solve the problems
            which ultimately occurs in programming.I am a curious and a
            continuous learner with creativity and Innovation. I love to make
            positive impact through my skills and works as I always focus on
            attention to detail and craftmanship.Overall, I am characterized by
            a deep love htmlFor coding, commitment to excellence, desire to
            inovate things. It fuels my motivation driving to success with
            vibrant dnd dynamic nature of the software development community.
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
  );
};

export default About;
