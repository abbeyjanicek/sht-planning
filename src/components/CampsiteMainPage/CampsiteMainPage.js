import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
          <Typography variant="headline" component="h1" id="addReview">Campsite Information</Typography>
          <Typography variant="headline" component="h2" id="addReview">Campsite Name:</Typography>
          <CampsiteDropdown name="campsite_name" onDropdownChange={this.handleCampsiteButton}/>
          <Button variant="contained" onClick={this.handleReviewButton}>Review a Campsite</Button>
          <Button variant="contained" onClick={this.handleProfileButton}>Go to User Profile</Button>
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