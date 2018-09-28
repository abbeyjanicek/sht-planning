import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import CampsiteDropdown from '../DropdownMenu/CampsiteDropdown.js'
// import MileMarker from '../MileMarker/MileMarker.js';

const mapStateToProps = state => ({
    user: state.user,
    campsite: state.campsiteToAdd,
    review: state.reviewToAdd,
  });

class AddReviewPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleCampsiteChange = (event) => {
    this.props.dispatch({
      type: 'ADD_CAMPSITE_REVIEW_NAME',
      payload: event.target.value
    })
  }

  handleRatingChange = (event) => {
    console.log('in handleRatingChange');
    this.props.dispatch({
      type: 'ADD_CAMPSITE_RATING',
      payload: event.target.value
    })
  }

  handleReviewChange = (event) => {
    console.log('in handleReviewChange');
    this.props.dispatch({
      type: 'ADD_CAMPSITE_REVIEW',
      payload: event.target.value
    })
  }

  handleCancelButton = (event) => {
    event.preventDefault();
    console.log('in handleCancelButton');
    this.props.history.push('/campsite-main')
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.review);
    Axios({
      method: 'POST',
      url: '/api/review-add',
      data: this.props.review,
    }).then((response) => {
      console.log('Back from POST: ', response.data);
      alert('Campsite review was added.')
      this.props.history.push('/campsite-main')
    }).catch((error) => {
      console.log(error);
      alert('Unable to add review.')
    }) 
}

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <Typography variant="headline" component="h1" id="addReview">Add a Review</Typography>
          <form onSubmit={this.handleSubmit}>
          <h4>Campsites:</h4>
            <CampsiteDropdown name="campsite_name" onDropdownChange={this.handleCampsiteChange}/>
            {/* <MileMarker /> */}
            <h4>Rating:</h4> <input type="text" value={this.props.rating} onChange={this.handleRatingChange}></input>
            <h4>Review:</h4> <textarea rows="6" cols="50" onChange={this.handleReviewChange}></textarea>
            <input type="submit" value="Add Review" />
          </form>
          <Button variant="contained" onClick={this.handleCancelButton}>Cancel</Button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

    export default connect(mapStateToProps)(AddReviewPage);