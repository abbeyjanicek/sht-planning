import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import moment from 'moment';

// import { USER_ACTIONS } from './../../redux/actions/userActions';

//gives the component access to the state of listed reducers
const MapStateToProps = state => ({
    user: state.user,
    newHike: state.upcomingHike,
    state,
});

class UpcomingHikesSummary extends Component {

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getUpcomingHikes();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }

    getUpcomingHikes = () => {
        console.log('in getUpcomingHikes');

        Axios({
            method: 'GET',
            url: '/api/hike/upcoming'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const hikeData = response.data;
            this.props.dispatch({
                payload: hikeData,
                type: 'DISPLAY_UPCOMING',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting upcoming hikes.')
        })
    }

    handleClickUpcomingHike = (event) => {
        console.log('in handleClickUpcomingHike');
        event.preventDefault();

        this.props.history.push('/history')

    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <ul>
                        {/* pulls items from the reducer via props */}
                        {this.props.newHike.map((hikeData, i) => {
                            return (
                                <li key={i} value={hikeData.date_start} onClick={this.handleClickUpcomingHike}>
                                    <p>{moment(hikeData.date_start).format('MM-DD-YYYY')}</p>
                                    {/* {JSON.stringify(this.props.state.inputHike)} */}
                                </li>
                            )
                        })}
                    </ul>
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

export default connect(MapStateToProps)(UpcomingHikesSummary);