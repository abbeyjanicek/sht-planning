import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DropdownMenu.css';

const MapStateToProps = state => ({
    user: state.user,
});

class TrailheadDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">Wild Valley Road</option>
                    <option value="2">Jay Cooke State Park</option>
                </select>
            </div>
        );
    }
}

export default connect(MapStateToProps)(TrailheadDropdown);