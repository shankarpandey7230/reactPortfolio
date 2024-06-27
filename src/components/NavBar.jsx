import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
