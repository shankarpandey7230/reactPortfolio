import React from 'react';
import Profile from '../assets/Profile.png';

const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I'm <span>Shankar Pandey</span>
            </div>
            <div className="tag">Software Developer</div>
            <p>I love coding, learning and growing day by day</p>
            <div>
              <a href="./assets/Shankar Resume.docx" download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            {/* <img src="./assets/Profile.png" alt="Shankar's Speech" /> */}
            <img src={Profile} alt="Shankar's Speech" />
          </div>
        </div>
      </section>
      {/* <!-- banner --> */}
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduate</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>10+Projects</span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>3+Year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
