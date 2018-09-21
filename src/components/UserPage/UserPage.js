import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import AddHikeButton from './AddHikeButton/AddHikeButton.js';
import HikeHistorySummary from './HikeHistorySummary/HikeHistorySummary.js';
import MapClick from './MapClick/MapClick.js';
import ReviewCampsite from './ReviewCampsite/ReviewCampsite.js';
import UpcomingHikesSummary from './UpcomingHikesSummary/UpcomingHikesSummary.js'
import './UserPage.css'

import { USER_ACTIONS } from '../../redux/actions/userActions';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        // className="userProfileContainer"
        <div>
          <h2 id="welcome">
            Welcome, {this.props.user.userName}!
          </h2>
          <div>
            <h3>Upcoming Hikes</h3>
            <UpcomingHikesSummary history={this.props.history}/>
          </div>
          <div>
            <h3>Completed Hikes</h3>
            <HikeHistorySummary history={this.props.history} />
          </div>
          <div>
          <h3>Click on the map to see your progress!</h3>
            <MapClick history={this.props.history} />
          </div>
          <div>
            <AddHikeButton history={this.props.history} />
          </div>
          <div>
            <ReviewCampsite history={this.props.history} />
          </div>
        </div>
          
      );
    }

    return (
      <div>
        <Nav />
        {content}
        </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

