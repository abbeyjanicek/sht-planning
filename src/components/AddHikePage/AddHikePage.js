import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddHikeForm from './AddHikeForm/AddHikeForm.js'


import Nav from '../Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    hike: state.hikeToAdd,
    state
  });

class AddHikePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleGoBack = (event) => {
    console.log('in handleGoBack');
    event.preventDefault();

    this.props.history.push('/user')
  }

    render() {
        let content = null;
    
        if (this.props.user.userName) {
          content = (
            <div>
              <Typography variant="headline" component="h1" id="addHike">Add a Hike</Typography>
              < AddHikeForm history={this.props.history} />
              <Button variant="contained" onClick={this.handleGoBack}>Go Back</Button>
            </div>
          );
        }
    
        return (
          <div>
            <Nav />
            { content }
          </div>
        );
      }
    }

    export default connect(mapStateToProps)(AddHikePage);