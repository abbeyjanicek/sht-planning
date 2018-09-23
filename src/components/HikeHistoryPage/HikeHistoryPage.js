import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import HikeHistoryTable from './HikeHistoryTable/HikeHistoryTable.js'

const MapStateToProps = state => ({
  user: state.user,
  hike: state.completedHike,
  state,
});

class HikeHistoryPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    // this.getCompletedHikes();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleGoBack = (event) => {
    console.log('in handleGoBack');
    event.preventDefault();

    this.props.history.push('/user')
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h3>Completed Hikes</h3>
          <table>
          <HikeHistoryTable />
          </table>
          <button onClick={this.handleGoBack}>Go Back</button>
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

export default connect(MapStateToProps)(HikeHistoryPage);