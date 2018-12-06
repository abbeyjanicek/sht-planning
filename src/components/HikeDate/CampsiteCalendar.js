import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DatePicker} from "material-ui-custom-datepicker";

const mapStateToProps = state => ({
  user: state.user,
});

class myDatePicker extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: new Date()
    }
  }  
  
  handleChange = (event, value) => {
    this.setState({value});
    this.props.dispatch({
      type: 'ADD_CAMPSITE_DATE',
      payload: value,
    })
  }
    
  render(){
    return (
      <DatePicker
        name="campDate"
        value={this.state.value}
        onChange={this.handleChange}  
        floatingLabelText="Camping Date"
        autoOk
        cancelLabel="Back"
        minDate={new Date(1900, 0, 1)}
        maxDate={new Date(2100, 0, 1)}
      />
    );
  }
}

export default connect(mapStateToProps)(myDatePicker);