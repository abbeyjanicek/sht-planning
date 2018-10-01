import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CampsiteDropdown from '../../DropdownMenu/CampsiteDropdown.js';
import DatePickers from '../../HikeDate/CampsiteCalendar.js';



const MapStateToProps = state => ({
    user: state.user,
    campsite: state.addedCampsites.campsiteToAdd,
});

class AddCampsiteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleCampsiteChange = (event) => {
        console.log('in handleCampsiteChange');
        this.props.dispatch({
            type: 'ADD_CAMPSITE',
            payload: event.target.value,
        })
        this.props.dispatch({
            type: 'ADD_CAMPSITE_NAME',
            payload: event.target.options[event.target.selectedIndex].text,
        })
    }

    handleSubmit = (event) => {
        this.setState({ open: false });
        event.preventDefault();
        console.log('inhandleSubmit: ', this.props.campsite);
        this.props.dispatch({
            type: 'CAMPSITE_ADDED',
            payload: this.props.campsite,
        })
    }
    // handleSubmit = (event) => {
    //     this.setState({ open: false });
    //     event.preventDefault();
    //     console.log('in handleSubmit: ', this.props.campsite);
    //     Axios({
    //         method: 'POST',
    //         url: '/api/campsite',
    //         data: this.props.campsite,
    //     }).then((response) => {
    //         console.log('Back from POST: ', response.data);
    //         alert('Campsite was added.')
    //         this.props.history.push('/add-hike')
    //     }).catch((error) => {
    //         console.log(error);
    //         alert('Unable to add campsite.')
    //     })
    // };



    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClickOpen}>Add Campsite</button>
                <Dialog fullWidth="true"
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Add a Campsite</DialogTitle>
                    <DialogContent>
                        <CampsiteDropdown name="campsite_name" onDropdownChange={this.handleCampsiteChange} />
                        {/* <MileMarker /> */}
                        <DatePickers name="date" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">Add Campsite</Button>
                        <Button onClick={this.handleClose} color="primary">Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default connect(MapStateToProps)(AddCampsiteModal);