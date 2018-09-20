import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

const MapStateToProps = state => ({
    user: state.user,
  });


class AddCampsiteButton extends Component {

    render() {
        return (
            <div>
                <button>Add Campsite</button>
            </div>
        );
    }
}

export default connect(MapStateToProps)(AddCampsiteButton);