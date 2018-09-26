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
          <Link to="/upcoming">
            Upcoming Hikes
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
        <li>
          <Link to="/add-hike">
            Add a Hike
          </Link>
        </li>
        <li>
          <Link to="/campsite-main">
            Campsite Review Main
          </Link>
        </li>
        <li>
          <Link to="/campsite-details">
            Campsite Review Details
          </Link>
        </li>
        <li>
          <Link to="/add-review">
            Add Campsite Review
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
