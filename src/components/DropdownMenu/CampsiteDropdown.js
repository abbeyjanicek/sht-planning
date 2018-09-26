import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DropdownMenu.css';
import Axios from 'axios';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const MapStateToProps = state => ({
    user: state.user,
    campsite: state.campsiteData,
    state,
});

class CampsiteDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getCampsites();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    getCampsites = () => {
        console.log('in getCampsites');

        Axios({
            method: 'GET',
            url: '/api/campsite'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const campsiteInfo = response.data;
            this.props.dispatch({
                payload: campsiteInfo,
                type: 'GET_CAMPSITE',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting campsites.')
        })
    }

    handleChange = (event) => {
        console.log('in handleChange');
        event.preventDefault();
        this.setState({value: event.target.value});
        this.props.onDropdownChange(event);
    }


    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {this.props.campsite.map((campsiteInfo, i) => {
                            return (
                                <option key={i} value={campsiteInfo.id} name="site_name">{campsiteInfo.site_name}</option>
                            )
                        }
                        )
                        }
                    </select>
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

export default connect(MapStateToProps)(CampsiteDropdown);