import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DropdownMenu.css';
import Axios from 'axios';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const MapStateToProps = state => ({
    user: state.user,
    trailhead: state.trailheadData,
    state,
});

class TrailheadDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getTrailheads();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    getTrailheads = () => {
        console.log('in getTrailheads');

        Axios({
            method: 'GET',
            url: '/api/trailhead'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const trailheadInfo = response.data;
            this.props.dispatch({
                payload: trailheadInfo,
                type: 'GET_TRAILHEAD',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting trailheads.')
        })
    }


    handleChange = (event) => {
        console.log('in handleChange ');
        event.preventDefault();
        this.setState({ value: event.target.value });
        this.props.onDropdownChange(event);
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {this.props.trailhead.map((trailheadInfo, i) => {
                            return (
                                <option key={i} value={trailheadInfo.id} name="trailhead_name">{trailheadInfo.trailhead_name}</option>
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

export default connect(MapStateToProps)(TrailheadDropdown);