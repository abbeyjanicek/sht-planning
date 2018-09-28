import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const mapStateToProps = reduxStore => ({
    reduxStore
});

class ReviewCampsiteButton extends Component {
    handleAddReview = (event) => {
        console.log('in handleAddReview');
        event.preventDefault();

        this.props.history.push('/add-review')

    }
    render() {
        return (
            <div>
                <Button variant="contained" onClick={this.handleAddReview}>
                    Review a Campsite
                </Button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ReviewCampsiteButton);