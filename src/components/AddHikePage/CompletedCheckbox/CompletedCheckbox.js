import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Axios from 'axios';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const MapStateToProps = state => ({
    user: state.user,
    completed: state.completed,
    state
});


class HikeCompleted extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
        }
    };

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
       
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    handleCheckbox = (event) => {
        console.log('in handleCheckbox');
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.dispatch({
            type: 'ADD_COMPLETED',
            payload: value,
        })
    }

    render() {
        return (
                <div>
                    <label>
                        Completed?
                     </label>
                    <input name="completed" type="checkbox" checked={this.state.completed} onChange={this.handleCheckbox} />
                </div>
            );

        } 
}


export default connect(MapStateToProps)(HikeCompleted);