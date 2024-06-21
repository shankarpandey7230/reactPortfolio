import React, { useState } from 'react';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="header container flex">
        <div className="logo flex">
          <div>Shankar</div>
          <div className="line">Software Developer</div>
        </div>
        <label htmlFor="hamburgerMenu" onClick={() => setShowMenu(!showMenu)}>
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="hamburgerMenu" />
        <div className={showMenu ? 'menu slide' : 'menu'}>
          <ul
            className="flex navigation"
            onClick={() => setShowMenu(!showMenu)}
          >
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
