import React, { Component } from 'react';
import { connect } from 'react-redux';

const MapStateToProps = reduxStore => ({
    reduxStore
});


class AddHikeButton extends Component {


    handleAddHike = (event) => {
        console.log('in handleAddHike');
        event.preventDefault();

        this.props.history.push('/add-hike')

    }
    render() {
        return (
            <div>
                <button onClick={this.handleAddHike}>Add a Hike</button>
                 
            </div>
        );
    }
}

export default connect(MapStateToProps)(AddHikeButton);