import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';


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

    handleClickUpcomingHikes = (event) => {
        console.log('in handleClickUpcomingHikes');
        event.preventDefault();

        this.props.history.push('/upcoming')

    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <table>
                        <tbody>
                            {/* pulls items from the reducer via props */}
                            {this.props.newHike.map((hikeData, i) => {
                                return (
                                    <Link to="/history"><tr key={i} value={hikeData.date_start} onClick={this.handleClickUpcomingHikes}>
                                        <td>{moment(hikeData.date_start).format('MM-DD-YYYY')}</td>
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

export default connect(MapStateToProps)(UpcomingHikesSummary);