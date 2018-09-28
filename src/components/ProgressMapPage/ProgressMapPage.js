import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from 'react-image-resizer';

import Nav from '../Nav/Nav';

const mapStateToProps = state => ({
  user: state.user,
});

class ProgressMapPage extends Component {


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
          <Typography variant="headline" component="h1" id="progressMap">Progress Map</Typography>
          <Image
            className="shtMap"
            src="images/SHT-map.gif"
            height={800}
            width={1000}
            alt="SHT" />
          <Button variant="contained" onClick={this.handleGoBack}>Go Back</Button>
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

export default connect(mapStateToProps)(ProgressMapPage);