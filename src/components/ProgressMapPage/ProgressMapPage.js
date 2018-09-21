import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

const mapStateToProps = state => ({
    user: state.user,
  });

class ProgressMapPage extends Component {


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
              <h2>
                Progress Map
              </h2>
              <img className="shtMap" src="images/SHT_hikemap.png" alt="SHT" />
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

    export default connect(mapStateToProps)(ProgressMapPage);