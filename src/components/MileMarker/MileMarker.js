import React, { Component } from 'react';
import { connect } from 'react-redux';


import Axios from 'axios';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const MapStateToProps = state => ({
    user: state.user,
    mileMarker: state.campsiteData,
    state,
});

class MileMarker extends Component {

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getMileMarker();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    getMileMarker = () => {
        console.log('in getMileMarker');

        Axios({
            method: 'GET',
            url: '/api/campsite'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const mileMarkerInfo = response.data;
            this.props.dispatch({
                payload: mileMarkerInfo,
                type: 'GET_CAMPSITE',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting campsites.')
        })
    }

    // handleChange = (event) => {
    //     console.log('inhandleChange');
    //     event.preventDefault();
    //     this.setState({ value: event.target.value });
    // }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <table>
                        {this.props.mileMarker.map((campsiteInfo, i) => {
                            return (
                                <tbody key={i} value={campsiteInfo._id}>
                                    <tr >
                                        <td>{campsiteInfo.mile_marker}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                        )
                        }
                    </table>
                    {/* onChange={this.handleChange}> */}


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

export default connect(MapStateToProps)(MileMarker);