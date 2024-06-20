import React from 'react';

const Footer = () => {
  return (
    <>
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
          <a href="https://www.linkedin.com/in/shankar-pandey/" target="_blank">
            @Shankar Pandey
          </a>
        </div>
      </footer>
      <a href="">
        <div className="goUp flex-center">
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </a>
    </>
  );
};

export default Footer;
