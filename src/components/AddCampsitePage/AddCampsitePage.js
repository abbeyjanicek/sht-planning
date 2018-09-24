import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import CampsiteDropdown from '../DropdownMenu/CampsiteDropdown.js'
import CampsiteDate from './../HikeDate/CampsiteDate.js'
import Nav from '../Nav/Nav';
// import MileMarker from '../MileMarker/MileMarker.js';


const mapStateToProps = state => ({
    user: state.user,
    campsite: state.campsiteToAdd,
    state
  });

class AddCampsitePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  } 

  handleCancelButton = (event) => {
    event.preventDefault();
    console.log('in handleCancelButton');
    this.props.history.push('/add-hike')
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.campsite);
    Axios({
      method: 'POST',
      url: '/api/campsite',
      data: this.props.campsite,
    }).then((response) => {
      console.log('Back from POST: ', response.data);
      alert('Campsite was added.')
      this.props.history.push('/add-hike')
    }).catch((error) => {
      console.log(error);
      alert('Unable to add campsite.')
    }) 
}

    render() {
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <h2>Add a Campsite</h2>
              <form onSubmit={this.handleSubmit}>
              <h4>Campsites:</h4>
                <CampsiteDropdown value={this.props.campsite.campsite_id} name="campsite_name"/>
                {/* <MileMarker /> */}
                <CampsiteDate value={this.props.campsite.date} name="date" />
                <input type="submit" value="Add Campsite" />
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

    export default connect(mapStateToProps)(AddCampsitePage);