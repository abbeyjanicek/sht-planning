import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

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
                <Button variant="contained" onClick={this.handleAddHike}>
                    Add a Hike
                </Button>
            </div>
        );
    }
}

export default connect(MapStateToProps)(AddHikeButton);