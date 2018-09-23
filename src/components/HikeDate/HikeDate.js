import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const mapStateToProps = state => ({
  user: state.user,
});

class HikeDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
    };

  }

  handleChange = (date) => {
    this.setState({ startDate: date });
    this.props.dispatch({
      type: 'ADD_CAMPSITE_DATE',
      payload: date,
    })
  }


  render() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
    />;
  }
}


export default connect(mapStateToProps)(HikeDate);