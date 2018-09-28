import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton.js';
import Typography from '@material-ui/core/Typography';

const Header = ({ title }) => (
  <div className="instructions">
    <div>
    <Typography className="lead" variant="headline" component="h1" id="welcome">{ title }</Typography>
    </div>
    <div>
    <LogOutButton />
    </div>
  </div>
);

export default Header;


