import React from 'react';

import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
      color: "white"
  }

  return (
    <div className="navBar">
      
      <nav>
      
          <ul className="nav-links">
              <Link style={navStyle} to="/">
                <li className="nav-links-i">Start</li>
              </Link>
              
              <Link style={navStyle} to="/about">
                <li className="nav-links-i">Mi</li>
              </Link>
              <Link style={navStyle} to="/events">
                <li className="nav-links-i">Dešavanja</li>
              </Link>
              <Link style={navStyle} to="/Contact">
                <li className="nav-links-i">Kontakt</li>
              </Link>
          </ul>
          
      </nav>

    </div>
  );
}

export default Nav;
