import React from 'react';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';


const MapStateToProps = state => ({
    user: state.user,
    completed: state.completed,
    state,
});

class CompletedSwitch extends React.Component {

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

    handleChange = value => event => {
        console.log('in handleChange');
        event.preventDefault();
        this.setState({ [value]: event.target.checked });
        this.props.dispatch({
            type: 'ADD_COMPLETED',
            payload: value,
        })
    };


    render() {
        return (
            <div>
                <Switch
                    checked={this.state.completed}
                    onChange={this.handleChange('true')}
                    value="true"
                    color="primary"
                />
            </div>


        );
    }
}

export default connect(MapStateToProps)(CompletedSwitch);
