import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import Nav from '../Nav/Nav';
import CampsiteDropdown from '../DropdownMenu/CampsiteDropdown.js'
import { USER_ACTIONS } from '../../redux/actions/userActions';
// import CampsiteDetailsPage from '../CampsiteDetailsPage/CampsiteDetailsPage.js'

const mapStateToProps = state => ({
  user: state.user,
  campsite: state.campsiteDetails,

});

class CampsiteMainPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }


  handleReviewButton = (event) => {
    event.preventDefault();
    console.log('in handleReviewButton');
    this.props.history.push('/add-review')
  }

  handleProfileButton = (event) => {
    event.preventDefault();
    console.log('in handleProfileButton');
    this.props.history.push('/user')
  }

  handleCampsiteDropdown = (event) => {
    event.preventDefault();
    console.log('in handleCampsiteDropdown', event.target.value);
    this.setState({value: event.target.value});
    Axios({
      method: 'GET',
      url: '/api/campsite/campsite-details'
    }).then((response) => {
      console.log('back from server with: ', response.data);
      const campsiteInfo = response.data;
      this.props.dispatch({
        payload: campsiteInfo,
        type: 'DISPLAY_CAMPSITE_REVIEW',
      })
    }).catch((error) => {
      console.log('error: ', error);
      alert('There was an error getting campsite review.')
    })
  }



  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          {/* <Typography variant="headline" component="h2" id="addReview">Campsite Name: {this.value}</Typography> */}
          <CampsiteDropdown name="campsite_name" onDropdownChange={this.handleCampsiteDropdown} />
          <Typography variant="headline" component="h1" id="campsiteReview">Campsite Review Details</Typography>
          <Typography>{this.props.campsite.site_name}</Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Latitude</TableCell>
                  <TableCell>Longitude</TableCell>
                  <TableCell>Mile Marker</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Review</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.campsite.map((campsite, i) => {
                  return (
                    <TableRow key={i} >
                      <TableCell>{campsite.latitude}</TableCell>
                      <TableCell>{campsite.longitude}</TableCell>
                      <TableCell>{campsite.mile_marker}</TableCell>
                      <TableCell>{campsite.rating}</TableCell>
                      <TableCell>{campsite.review}</TableCell>
                      <TableCell><Button variant="contained">Edit</Button></TableCell>
                      <TableCell><Button variant="contained">Delete</Button></TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
          <Button variant="contained" onClick={this.handleReviewButton}>Review a Campsite</Button>
          <Button variant="contained" onClick={this.handleProfileButton}>Go to User Profile</Button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CampsiteMainPage);