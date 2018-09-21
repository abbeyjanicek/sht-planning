import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Axios from 'axios';

const MapStateToProps = state => ({
    user: state.user,
});


class HikeCompleted extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
        }
    };

    handleCheckbox = (event) => {
        console.log('in handleCheckbox');
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <label>
                    Completed?
                    <input name="completed" type="checkbox" checked={this.state.completed} onChange={this.handleCheckbox} />
                </label>
            </div>
        );
    }
}


export default connect(MapStateToProps)(HikeCompleted);