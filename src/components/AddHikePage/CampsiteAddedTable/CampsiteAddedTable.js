import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const MapStateToProps = state => ({
    user: state.user,
    hike: state.hikeToAdd,
    campsite: state.addedCampsites.addedCampsites,
});

class CampsiteAddedTable extends Component {

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    getAddedCampsites = () => {
        console.log('in getAddedCampsite');
        Axios({
            method: 'GET',
            url: '/api/campsite/added'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const campsiteInfo = response.data;
            this.props.dispatch({
                payload: campsiteInfo,
                type: 'DISPLAY_ADDED_CAMPSITE',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting added campsites.')
        })
    }

    render() {
        console.log(this.props.campsite);
        let content = null;

        if (this.props.user.userName) {
            content = (

                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Campsite Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.campsite.map((campsite, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <TableCell>{moment(campsite.date.toString()).format('MM-DD-YYYY')}</TableCell>
                                            <TableCell>{campsite.site_name}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            )
        }
        return (
            <div>
                {content}
            </div>
        )
    }

}

export default connect(MapStateToProps)(CampsiteAddedTable);