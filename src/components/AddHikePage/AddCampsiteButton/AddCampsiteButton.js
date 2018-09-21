import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Axios from 'axios';

const MapStateToProps = state => ({
    user: state.user,
  });


class AddCampsiteButton extends Component {

    handleAddCampsite = (event) => {
        console.log('in handleAddCampsite');
        event.preventDefault();

        this.props.history.push('/add-campsite')

    }
    render() {
        return (
            <div>
                <button onClick={this.handleAddCampsite}>Add Campsite</button>
                 
            </div>
        );
    }
}


export default connect(MapStateToProps)(AddCampsiteButton);