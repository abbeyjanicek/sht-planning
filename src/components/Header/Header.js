import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton.js';

const Header = ({ title }) => (
  <div className="instructions">
    <div>
      <h1 className="lead">{ title }</h1>
    </div>
    <div>
    <LogOutButton />
    </div>
  </div>
);

export default Header;
