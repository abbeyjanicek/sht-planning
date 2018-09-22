import React, { Component } from 'react';
import { connect } from 'react-redux';


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
            this.props.dispatch({
                payload: response.data,
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
                            {this.props.hike.map((hikeInfo, i) => {
                                return (
                                    <tr key={i} >
                                        <td>{this.props.hike.date_start}</td>
                                        <td>{this.props.hike.date_end}</td>
                                        <td>{this.props.hike.mile_start}</td>
                                        <td>{this.props.hike.mile_end}</td>
                                        <td>{this.props.hike.completed}</td>
                                        <td>{this.props.hike.trailhead_start_id}</td>
                                        <td>{this.props.hike.trailhead_end_id}</td>
                                        <td>{this.props.hike.comments}</td>
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






