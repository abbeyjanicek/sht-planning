import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DropdownMenu.css';

const MapStateToProps = state => ({
    user: state.user,
  });

class TrailheadDropdown extends Component {
    constructor() {
        super();

        this.state = {
            showDropdown: false,
        }
    }

    showDropdown = (event) => {
        event.preventDefault();

        this.setState({ showDropdown: true }, () => {
            document.addEventListener('click', this.closeDropdown);
        });
    }

    closeDropdown = (event) => {
        event.preventDefault();
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showDropdown: false }, () => {
                document.removeEventListener('click', this.closeDropdown);
            });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showDropdown}>Click Here for Options</button>
                {
                    this.state.showDropdown
                        ? (
                            <div className="dropdown" ref={(element) => { this.dropdownMenu = element; }}>
                                <button> Wild Valley Road </button>
                                <button> Jay Cooke State Park </button>
                                <button> Grand Portage </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default connect(MapStateToProps)(TrailheadDropdown);