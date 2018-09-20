import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import AddCampsiteButton from '../AddCampsiteButton/AddCampsiteButton.js'

// import HikeCalendar from './components/Calendar/Calendar.js';

const MapStateToProps = state => ({
    user: state.user,
  });

class AddHikeForm extends Component {

    render() {
        return (
            <form>
                {/* <HikeCalendar /> */}
                <input type="text" placeholder="start date" name="start_date" />
                <input type="text" placeholder="end date" name="end_date" />
                <input type="text" placeholder="starting mile" name="start_mile" />
                <input type="text" placeholder="ending mile" name="end_mile" />
                <input type="text" placeholder="start trailhead" name="start_trailhead" />
                <input type="text" placeholder="end trailhead" name="end_trailhead" />
                <h3>Campsites</h3>
                <p>Not sure where to camp? CLICK HERE to visit the campsite review page.</p>
                <AddCampsiteButton />
                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default connect(MapStateToProps)(AddHikeForm);