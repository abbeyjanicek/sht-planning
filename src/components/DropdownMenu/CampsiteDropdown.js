import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DropdownMenu.css';

const MapStateToProps = state => ({
    user: state.user,
  });

class CampsiteDropdown extends Component {
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
                                <button> Bald Eagle </button>
                                <button> White Pine </button>
                                <button> Lone Tree </button>
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

export default connect(MapStateToProps)(CampsiteDropdown);