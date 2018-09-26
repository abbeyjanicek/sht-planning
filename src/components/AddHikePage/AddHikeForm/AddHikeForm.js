import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { USER_ACTIONS } from '../../../redux/actions/userActions';
import HikeStartDate from '../../HikeDate/HikeStartDate.js'
import HikeEndDate from '../../HikeDate/HikeEndDate.js'
import AddCampsiteModal from '../AddCampsiteModal/AddCampsiteModal.js'
import CampsiteAddedTable from '../CampsiteAddedTable/CampsiteAddedTable.js';
import TrailheadDropdown from '../../DropdownMenu/TrailheadDropdown.js'
// import HikeCompleted from '../CompletedCheckbox/CompletedCheckbox.js'
import CheckboxLabels from '../CompletedCheckbox/Checkbox.js'


const MapStateToProps = state => ({
    user: state.user,
    hikeToAdd: state.hikeToAdd,
    trailhead: state.trailheadData,
    state
});

class AddHikeForm extends Component {
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {

        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    handleMileStartChange = (event) => {
        console.log('in handleMileStartChange');
        this.props.dispatch({
            type: 'ADD_MILE_START',
            payload: event.target.value
        })
    }

    handleMileEndChange = (event) => {
        console.log('in handleMileEndChange');
        this.props.dispatch({
            type: 'ADD_MILE_END',
            payload: event.target.value
        })
    }

    handleStartTrailheadChange = (event) => {
        console.log('in handleStartTrailheadChange');
        this.props.dispatch({
            type: 'ADD_TRAILHEAD_START',
            payload: event.target.value
        })
    }

    handleEndTrailheadChange = (event) => {
        console.log('in handleEndTrailheadChange');
        this.props.dispatch({
            type: 'ADD_TRAILHEAD_END',
            payload: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        console.log('in handleCommentsChange');
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit: ', this.props.hikeToAdd);
        Axios({
            method: 'POST',
            url: '/api/hike',
            data: this.props.hikeToAdd,
        }).then((response) => {
            console.log('Back from POST: ', response.data);
            alert('Hike was added.')
            this.props.history.push('/user');
        }).catch((error) => {
            console.log(error);
            alert('Unable to add hike.')
        })
    }


    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <CheckboxLabels />
                        <h4>Start Date:</h4><HikeStartDate />
                        <h4>End Date:</h4><HikeEndDate />
                        <h4>Starting Mile Marker:</h4>
                        <input type="text" placeholder="starting mile" name="mile_start" value={this.props.mile_start} onChange={this.handleMileStartChange} />
                        <h4>Ending Mile Marker:</h4>
                        <input type="text" placeholder="ending mile" name="end_mile" value={this.props.mile_end} onChange={this.handleMileEndChange} />
                        <h4>Starting Trailhead: </h4><TrailheadDropdown  onDropdownChange={this.handleStartTrailheadChange}/>
                        <h4>Ending Trailhead: </h4><TrailheadDropdown onDropdownChange={this.handleEndTrailheadChange}/>
                        <h4>Campsites</h4>
                        <p>Not sure where to camp? </p>
                        <Link to="/campsite-main">
                            Click here
                        </Link> to visit the campsite review page.
                        <AddCampsiteModal history={this.props.history} onClick={this.handleClickOpen}/>
                        <CampsiteAddedTable />
                        <h4>Comments:</h4> <textarea rows="6" cols="50" name="comments" value={this.props.comments} onChange={this.handleCommentsChange}></textarea>
                        <input type="submit" value="Submit" />
                    </form>
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

export default connect(MapStateToProps)(AddHikeForm);