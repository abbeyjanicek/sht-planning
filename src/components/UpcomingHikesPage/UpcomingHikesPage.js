import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import UpcomingHikesTable from './UpcomingHikesTable/UpcomingHikesTable.js'

const MapStateToProps = state => ({
  user: state.user,
  hike: state.upcomingHike,
  state,
});

class UpcomingHikesPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    // this.getUpcomingHikes();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  // getUpcomingHikes = () => {
  //   console.log('in getUpcomingHikes');

  //   Axios({
  //     method: 'GET',
  //     url: '/api/hike/upcoming'
  //   }).then((response) => {
  //     console.log('back from server with: ', response.data);
  //     const hikeInfo = response.data;
  //     this.props.dispatch({
  //       payload: hikeInfo,
  //       type: 'DISPLAY_UPCOMING',
  //     })
  //   }).catch((error) => {
  //     console.log('error: ', error);
  //     alert('There was an error getting upcoming hikes.')
  //   })
  // }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h3>Upcoming Hikes</h3>
          <table>
          <UpcomingHikesTable />
          </table>
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

export default connect(MapStateToProps)(UpcomingHikesPage);