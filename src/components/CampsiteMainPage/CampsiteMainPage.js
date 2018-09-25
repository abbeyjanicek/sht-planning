import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import CampsiteDropdown from '../DropdownMenu/CampsiteDropdown.js'
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class CampsiteMainPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleCampsiteButton = (event) => {
    event.preventDefault();
    console.log('in handleCampsiteButton');
    this.props.history.push('/campsite-details')
  }

  handleReviewButton = (event) => {
    event.preventDefault();
    console.log('in handleReviewButton');
    this.props.history.push('/add-review')
  }

  handleProfileButton = (event) => {
    event.preventDefault();
    console.log('in handleProfileButton');
    this.props.history.push('/user')
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h3>Campsite Information</h3>
          <h4>Campsite Name:</h4>
          <CampsiteDropdown />
          <button onClick={this.handleCampsiteButton}>Go to Campsite</button>
          <button onClick={this.handleReviewButton}>Review a Campsite</button>
          <button onClick={this.handleProfileButton}>Go to Profile</button>
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

export default connect(mapStateToProps)(CampsiteMainPage);