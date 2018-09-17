import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/history">
            Hike History
          </Link>
        </li>
        <li>
          <Link to="/map">
            Progress Map
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
