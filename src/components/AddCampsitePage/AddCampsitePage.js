import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampsiteDropdown from '../DropdownMenu/CampsiteDropdown.js'

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

    render() {
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <p>Add a Campsite</p>
              <form onSubmit={this.handleSubmit}>
              <CampsiteDropdown />
                        <h4>Starting Mile Marker:</h4>
                        <input type="text" placeholder="starting mile" name="mile_start" />
                        
                        <input type="submit" value="Submit" />
                    </form>
              
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