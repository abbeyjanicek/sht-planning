import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mapStateToProps = state => ({
  user: state.user,
  campsite: state.campsiteReview,
});

class CampsiteDetailsPage extends Component {


  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  // handleGoBack = (event) => {
  //   event.preventDefault();
  //   console.log('in handleGoBack');
  //   this.props.history.push('/campsite-main')
  // }

  getCampsiteReview = () => {
    console.log('in getCampsiteReview');
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
          <Typography variant="headline" component="h1" id="campsiteReview">Campsite Review Details</Typography>
          <Typography>Sugarloaf Pond</Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Latitude</TableCell>
                  <TableCell>Longitude</TableCell>
                  <TableCell>Mile Marker</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Review</TableCell>
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
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
          {/* <Button variant="contained" onClick={this.handleGoBack}>Go Back</Button> */}
        </div>
      );
    }

    return (
      <div>
        
        {content}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CampsiteDetailsPage);