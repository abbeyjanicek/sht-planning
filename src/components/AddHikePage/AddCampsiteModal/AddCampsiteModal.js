import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CampsiteDropdown from '../../DropdownMenu/CampsiteDropdown.js';
import CampsiteDate from '../../HikeDate/CampsiteDate.js';



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

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Add Campsite</Button>
                <Dialog fullWidth='true'
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Add a Campsite</DialogTitle>
                    <DialogContent>
                        <CampsiteDropdown name="campsite_name" onDropdownChange={this.handleCampsiteChange} />
                        {/* <MileMarker /> */}
                        <CampsiteDate name="date" />
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