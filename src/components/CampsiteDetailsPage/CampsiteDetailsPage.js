import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import Nav from '../Nav/Nav';

const mapStateToProps = state => ({
    user: state.user,
    campsite: state.campsiteData,
  });

class CampsiteDetailsPage extends Component {


  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleGoBack = (event) => {
    event.preventDefault();
    console.log('in handleGoBack');
    this.props.history.push('/campsite-main')
  }

  getCampsiteReview = () => {
    console.log('in getCampsiteReview');
    Axios({
        method: 'GET',
        url: '/api/campsite/review-details'
    }).then((response) => {
        console.log('back from server with: ', response.data);
        const campsiteInfo = response.data;
        this.props.dispatch({
            payload: campsiteInfo,
            type: 'DISPLAY_CAMPSITE_REVIEW',
        })
    }).catch((error) => {
        console.log('error: ', error);
        alert('There was an error getting campsite review.')
    })
}

    render() {
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <p>Campsite Review Details</p>
              <h1>{this.props.campsite.site_name}</h1>
              <table>
                <thead>
                  <tr>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Mile Marker</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.campsite.map((campsite, i) => {
                    return (
                      <tr key = {i} >
                      <td>{campsite.latitude}</td>
                      <td>{campsite.longitude}</td>
                      <td>{campsite.mile_marker}</td>
                      <td>{campsite.rating}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <h4>Review:</h4><textarea rows="6" cols="50"></textarea>
              <button onClick={this.handleGoBack}>Go Back</button>
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

    export default connect(mapStateToProps)(CampsiteDetailsPage);