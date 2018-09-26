import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CampsiteDropdown from '../../DropdownMenu/CampsiteDropdown.js'
import CampsiteDate from '../../HikeDate/CampsiteDate.js'


const MapStateToProps = state => ({
    user: state.user,
    campsite: state.campsiteToAdd,
});


class AddCampsiteModal extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    // handleSubmit = (event) => {
    //     this.setState({ open: false });
    //     event.preventDefault();
    //     console.log(this.props.campsite);
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

    handleSubmit = (event) => {
        this.setState({open: false});
        event.preventDefault();
        console.log(this.props.campsite);
        const action = {type: 'ADD_CAMPSITE', payload: action.payload}
        this.props.dispatch(action);        
    }

    handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClickOpen}>Add Campsite</button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Add a Campsite</DialogTitle>
                    <DialogContent>
                        <CampsiteDropdown value={this.props.campsite.campsite_id} name="campsite_name" />
                        {/* <MileMarker /> */}
                        <CampsiteDate value={this.props.campsite.date} name="date" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleSubmit} color="primary">Add Campsite</Button>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


export default connect(MapStateToProps)(AddCampsiteModal);