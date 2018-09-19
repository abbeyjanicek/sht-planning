import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
  });

class AddHikePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

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
              <h1>
                Add a Hike
              </h1>
              <form>
              <input type="text" placeholder="start date" name="start_date" />
              <input type="text" placeholder="end date" name="end_date" />
              <input type="text" placeholder="starting mile" name="start_mile" />
              <input type="text" placeholder="ending mile" name="end_mile" />
              <input type="text" placeholder="start trailhead" name="start_trailhead" />
              <input type="text" placeholder="end trailhead" name="end_trailhead" />
              <h3>Campsites</h3>
              <p>Not sure where to camp? CLICK HERE to visit the campsite review page.</p>
              <button>Add Campsite</button>
              <input type="submit" value="submit" />
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

    export default connect(mapStateToProps)(AddHikePage);