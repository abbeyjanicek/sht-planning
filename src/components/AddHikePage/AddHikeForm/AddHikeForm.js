import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import HikeDate from '../HikeDate/HikeDate.js'

import AddCampsiteButton from '../AddCampsiteButton/AddCampsiteButton.js'
import CampsiteAddedTable from '../CampsiteAddedTable/CampsiteAddedTable.js';
import TrailheadDropdown from '../../DropdownMenu/TrailheadDropdown.js'


const MapStateToProps = state => ({
    user: state.user,
  });

class AddHikeForm extends Component {

    render() {
        return (
            <form>
                <h4>Start Date:</h4> <HikeDate />
                <h4>End Date:</h4> <HikeDate />
                <h4>Starting Mile Marker:</h4> <input type="text" placeholder="starting mile" name="start_mile" />
                <h4>Ending Mile Marker:</h4> <input type="text" placeholder="ending mile" name="end_mile" />
                <h4>Starting Trailhead: </h4><input type="text" placeholder="starting trailhead" name="start_trailhead" />
                <TrailheadDropdown />
                <h4>Ending Trailhead: </h4> <input type="text" placeholder="ending trailhead" name="ending_trailhead" />
                <TrailheadDropdown />
                <h4>Campsites</h4>
                <p>Not sure where to camp? CLICK HERE to visit the campsite review page.</p>
                <AddCampsiteButton history={this.props.history}/>
                <CampsiteAddedTable />
                <h4>Comments:</h4> <textarea rows="6" cols="50"></textarea>
                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default connect(MapStateToProps)(AddHikeForm);