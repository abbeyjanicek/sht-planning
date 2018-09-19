import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import AddHikeButton from './AddHikeButton/AddHikeButton.js';
// import CompletedHikes from '../CompletedHikes/CompletedHikes.js';
import MapClick from './MapClick/MapClick.js';
import ReviewCampsite from './ReviewCampsite/ReviewCampsite.js';
import UpcomingHikesSummary from './UpcomingHikesSummary/UpcomingHikesSummary.js'

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
        <div>
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
          </h1>
          </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
        <div>
            <p>Upcoming Hikes</p>
            <UpcomingHikesSummary />
          </div>
          <div>
            {/* <CompletedHikes /> */}
            <p>Completed Hikes</p>
          </div>
          <div>
            <MapClick history={this.props.history} />
            <p>Click on the map to see your progress!</p>
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
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

