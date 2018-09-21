import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampsiteDropdown from '../DropdownMenu/CampsiteDropdown.js'
import HikeDate from './../HikeDate/HikeDate.js'
import Nav from '../Nav/Nav';

const mapStateToProps = state => ({
    user: state.user,
  });

class AddCampsitePage extends Component {


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
    console.log('in handleSubmit');
    this.props.history.push('/add-hike')
}

    render() {
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <h2>Add a Campsite</h2>
              <form onSubmit={this.handleSubmit}>
                <CampsiteDropdown />
                <h4>Mile Marker:</h4>
                <input type="text" placeholder="mile marker" name="mile_marker" />
                <HikeDate />
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