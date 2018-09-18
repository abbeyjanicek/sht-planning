import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => ({
    reduxStore
});


class MapClick extends Component {
    constructor(props) {
        super(props);
    }

    handleMapClick = (event) => {
        console.log('in handleMapClick');
        event.preventDefault();

        this.props.history.push('/map')

    }
    render() {
        return (
            <div>
                <img className="shtMap" src="images/SHT_hikemap.png" onClick={this.handleMapClick} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(MapClick);