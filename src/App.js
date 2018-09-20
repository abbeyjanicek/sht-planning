import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import RegisterPage from './components/RegisterPage/RegisterPage.js';
import UserPage from './components/UserPage/UserPage.js';
import HikeHistoryPage from './components/HikeHistoryPage/HikeHistoryPage.js'
import ProgressMapPage from './components/ProgressMapPage/ProgressMapPage.js'
import AddHikePage from './components/AddHikePage/AddHikePage.js'
import AddCampsitePage from './components/AddCampsitePage/AddCampsitePage.js'
import CampsiteMainPage from './components/CampsiteMainPage/CampsiteMainPage.js'
import CampsiteDetailsPage from './components/CampsiteDetailsPage/CampsiteDetailsPage.js'
import AddReviewPage from './components/AddReviewPage/AddReviewPage.js'

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Superior Hiking Trail Planner" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/history"
          component={HikeHistoryPage}
        />
        <Route
          path="/map"
          component={ProgressMapPage}
        />
        <Route
          path="/add-hike"
          component={AddHikePage}
        />
        <Route
          path="/add-campsite"
          component={AddCampsitePage}
        />
        <Route
          path="/campsite-main"
          component={CampsiteMainPage}
        />
        <Route
          path="/campsite-details"
          component={CampsiteDetailsPage}
        />
        <Route
          path="/add-review"
          component={AddReviewPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  </div>
);

export default App;
