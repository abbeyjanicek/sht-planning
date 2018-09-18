import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => ({
    reduxStore
});

class ReviewCampsite extends Component {
    handleAddReview = (event) => {
        console.log('in handleAddReview');
        event.preventDefault();

        this.props.history.push('/add-review')

    }
    render() {
        return (
            <div>
                <button onClick={this.handleAddReview}>Review a Campsite</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ReviewCampsite);