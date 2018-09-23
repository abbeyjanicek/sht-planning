import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Axios from 'axios';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const MapStateToProps = state => ({
    user: state.user,
    hike: state.completedHike,
    state,
});

class HikeHistoryTable extends Component {
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

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Starting Mile Marker</th>
                                <th>Ending Mile Marker</th>
                                <th>Completed</th>
                                <th>Starting Trailhead</th>
                                <th>Ending Trailhead</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.hike.map((hike, i) => {
                                return (
                                    <tr key={i} >
                                        <td>{moment(hike.date_start).format('MM-DD-YYYY')}</td>
                                        <td>{moment(hike.date_end).format('MM-DD-YYYY')}</td>
                                        <td>{hike.mile_start}</td>
                                        <td>{hike.mile_end}</td>
                                        <td>{hike.completed}</td>
                                        <td>{hike.trailhead_start_id}</td>
                                        <td>{hike.trailhead_end_id}</td>
                                        <td>{hike.comments}</td>
                                    </tr>
                                )
                            })
                            }
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

export default connect(MapStateToProps)(HikeHistoryTable);






