import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Nav from '../../components/Nav/Nav';
import AddHikeButton from './AddHikeButton/AddHikeButton.js';
import HikeHistorySummary from './HikeHistorySummary/HikeHistorySummary.js';
import MapClick from './MapClick/MapClick.js';
import ReviewCampsiteButton from './ReviewCampsite/ReviewCampsite.js';
import UpcomingHikesSummary from './UpcomingHikesSummary/UpcomingHikesSummary.js'
import './UserPage.css'

import { USER_ACTIONS } from '../../redux/actions/userActions';


const mapStateToProps = state => ({
  user: state.user,
});

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

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
          <Typography variant="headline" component="h1" id="welcome">
            Welcome, {this.props.user.userName}!
            </Typography>
          <Card >
            <CardContent>
              <Typography variant="headline" component="h2">Upcoming Hikes</Typography>
              <UpcomingHikesSummary history={this.props.history} />
            </CardContent>
          </Card>
          <Card >
            <CardContent>
              <Typography variant="headline" component="h2">Completed Hikes</Typography>
              <HikeHistorySummary history={this.props.history} />
            </CardContent>
          </Card>
          <Card >
            <CardContent>
              <Typography variant="headline" component="h2">Click on the map to see your progress!</Typography>
              <MapClick history={this.props.history} />
            </CardContent>
          </Card>
          <div>
            <AddHikeButton history={this.props.history} />
          </div>
          <div>
            <ReviewCampsiteButton history={this.props.history} />
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

