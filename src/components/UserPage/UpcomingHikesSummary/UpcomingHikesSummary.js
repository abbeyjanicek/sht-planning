import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import moment from 'moment';

// import { USER_ACTIONS } from './../../redux/actions/userActions';

//gives the component access to the state of listed reducers
const MapStateToProps = state => ({
    user: state.user,
    hike: state.inputHike,
    state,
});

// const newHike = {
//     date: hike.date_start,
//     completed: false,
// }

class UpcomingHikesSummary extends Component {

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getUpcomingHikes();
    }

    getUpcomingHikes = () => {
        console.log('in getUpcomingHikes');

        Axios({
            method: 'GET',
            url: '/api/hike'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const hikeData = response.data;
            this.props.dispatch({
                payload: hikeData,
                type: 'DISPLAY_ITEMS',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting upcoming hikes.')
        })
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <ul>
                        {/* pulls items from the reducer via props */}
                        {this.props.hike.map((hikeData, i) => {
                            return (
                                <li key={i} value={hikeData.date_start}>
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