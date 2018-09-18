import React, { Component } from 'react';
import { connect } from 'react-redux';

import { triggerLogout } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
    user: state.user,
  });

class LogOutButton extends Component {

    logout = () => {
        this.props.dispatch(triggerLogout());
    }
    render() {
        return (
            <button onClick={this.logout}>Log Out</button>
        );
    }
}

export default connect(mapStateToProps)(LogOutButton);

