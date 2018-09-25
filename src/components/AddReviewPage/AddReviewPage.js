import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

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

  handleDropdownChange = (event) => {
    this.props.dispatch({
      type: 'ADD_CAMPSITE_REVIEW_NAME',
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
          <h2>Add a Review</h2>
          <form onSubmit={this.handleSubmit}>
          <h4>Campsites:</h4>
            <CampsiteDropdown value={this.props.campsite.campsite_id} name="campsite_name" onChange={this.handleDropdownChange}/>
            {/* <MileMarker /> */}
            Rating: <input type="text"></input>
            <h4>Review:</h4> <textarea rows="6" cols="50"></textarea>
            <input type="submit" value="Add Review" />
          </form>
          <button onClick={this.handleCancelButton}>Cancel</button>
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