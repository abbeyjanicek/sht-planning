import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

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
            <Button variant="contained" onClick={this.logout}>Log Out</Button>
        );
    }
}

export default connect(mapStateToProps)(LogOutButton);

