import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import { USER_ACTIONS } from '../../redux/actions/userActions';
import HikeDate from '../../HikeDate/HikeDate.js'
import AddCampsiteButton from '../AddCampsiteButton/AddCampsiteButton.js'
import CampsiteAddedTable from '../CampsiteAddedTable/CampsiteAddedTable.js';
import TrailheadDropdown from '../../DropdownMenu/TrailheadDropdown.js'
import HikeCompleted from '../CompletedCheckbox/CompletedCheckbox.js'



const MapStateToProps = state => ({
    user: state.user,
    hike: state.hikeToAdd,
    state
});

class AddHikeForm extends Component {
    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {

        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit');
        Axios({
            method: 'POST',
            url: '/api/hike',
            data: this.props.hike,
        }).then((response) => {
            console.log('Back from POST: ', response.data);
            const action = { type: 'ADD_HIKE' }
            this.props.dispatch(action);
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
                        <HikeCompleted />
                        <h4>Start Date:</h4>
                        <HikeDate />
                        <h4>End Date:</h4>
                        <HikeDate />
                        <h4>Starting Mile Marker:</h4>
                        <input type="text" placeholder="starting mile" name="mile_start" />
                        {/* value={this.props.hikeToAdd.mile_start} */}
                        <h4>Ending Mile Marker:</h4>
                        <input type="text" placeholder="ending mile" name="end_mile" />
                        <h4>Starting Trailhead: </h4><TrailheadDropdown />
                        <h4>Ending Trailhead: </h4><TrailheadDropdown />
                        <h4>Campsites</h4>
                        <p>Not sure where to camp? </p>
                        <Link to="/campsite-main">
                            CLICK HERE
                        </Link>
                        to visit the campsite review page.
                        <AddCampsiteButton history={this.props.history} />
                        <CampsiteAddedTable />
                        <h4>Comments:</h4> <textarea rows="6" cols="50"></textarea>
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