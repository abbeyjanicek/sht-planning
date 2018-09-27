import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import moment from 'moment';



const MapStateToProps = state => ({
    user: state.user,
    hike: state.hikeToAdd,
    campsite: state.addedCampsites.addedCampsites,
});

class CampsiteAddedTable extends Component {

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    getAddedCampsites = () => {
        console.log('in getAddedCampsite');
        Axios({
            method: 'GET',
            url: '/api/campsite/added'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const campsiteInfo = response.data;
            this.props.dispatch({
                payload: campsiteInfo,
                type: 'DISPLAY_ADDED_CAMPSITE',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting added campsites.')
        })
    }

    render() {
        console.log(this.props.campsite);
        let content = null;

        if (this.props.user.userName) {
            content = (

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Campsite Name</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.campsite.map((campsite, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{moment(campsite.date.toString()).format('MM-DD-YYYY')}</td>
                                        <td>{campsite.site_name}</td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            )
        }
        return (
            <div>
                {content}
            </div>
        )
    }

}

export default connect(MapStateToProps)(CampsiteAddedTable);