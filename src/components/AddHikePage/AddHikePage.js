import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

const mapStateToProps = state => ({
    user: state.user,
  });

class AddHikePage extends Component {

    render() {
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <p>
                Add a Hike
              </p>
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

    export default connect(mapStateToProps)(AddHikePage);