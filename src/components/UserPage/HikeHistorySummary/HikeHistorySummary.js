import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

//gives the component access to the state of listed reducers
const MapStateToProps = state => ({
  user: state.user,
  hike: state.completedHike,
  state,
});

class HikeHistorySummary extends Component {
  componentDidMount() {
    // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
      const hikeInfo = response.data;
      this.props.dispatch({
        payload: hikeInfo,
        type: 'DISPLAY_COMPLETED',
      })
    }).catch((error) => {
      console.log('error: ', error);
      alert('There was an error getting completed hikes.')
    })
  }

  handleClickCompletedHikes = (event) => {
    console.log('in handleClickCompletedHikes');
    event.preventDefault();
    this.props.history.push('/history')

  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <table>
            <tbody>
              {/* pulls items from the reducer via props */}
              {this.props.hike.map((hikeInfo, i) => {
                return (
                  <Link to="/history"><tr key={i} value={hikeInfo.date_start} onClick={this.handleClickCompletedHikes}>
                    <td>{moment(hikeInfo.date_start).format('MM-DD-YYYY')}</td>
                  </tr></Link>
                  )
                })}
            </tbody>
          </table>
        </div>
          );
        }

        return (
      <div>
            {content}
          </div>
          )
        }
      }

// this allows us to use <App /> in index.js
                    export default connect(MapStateToProps)(HikeHistorySummary);
