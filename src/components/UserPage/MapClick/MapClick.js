import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => ({
    reduxStore
});


class MapClick extends Component {


    handleMapClick = (event) => {
        console.log('in handleMapClick');
        event.preventDefault();

        this.props.history.push('/map')

    }
    render() {
        return (
            <div>
                <img className="shtMap" src="images/superior-map-thumb.png" alt="SHT" onClick={this.handleMapClick} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(MapClick);