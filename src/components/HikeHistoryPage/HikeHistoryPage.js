import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import HikeHistoryTable from './HikeHistoryTable/HikeHistoryTable.js'

const MapStateToProps = state => ({
    user: state.user,
    state,
  });

class HikeHistoryPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getCompletedHikes();
      }
    
      componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }

      getCompletedHikes = () => {
        console.log('in getCompletedHikes');
    
        Axios({
          method: 'GET',
          url: '/api/hike/completed'
        }).then((response) => {
          console.log('back from server with: ', response.data);
          const hikeInfo  = response.data;
          this.props.dispatch({
            payload: hikeInfo,
            type: 'DISPLAY_COMPLETED',
          })
        }).catch((error) => {
          console.log('error: ', error);
          alert('There was an error getting completed hikes.')
        })
      }

    render() {
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <h3>Completed Hikes</h3>
          <ul>
            <HikeHistoryTable />
          </ul>
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

export default connect(MapStateToProps)(HikeHistoryPage);