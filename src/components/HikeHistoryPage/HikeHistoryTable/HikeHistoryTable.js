import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Axios from 'axios';
// import { USER_ACTIONS } from '../../redux/actions/userActions';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

const MapStateToProps = state => ({
    user: state.user,
    hike: state.completedHike,
    state,
});

class HikeHistoryTable extends Component {
    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getCompletedHikes();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    getCompletedHikes = () => {
        console.log('in getCompletedHikes');
        Axios({
            method: 'GET',
            url: '/api/hike/completed'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const hikeInfo = response.data;
            this.props.dispatch({
                payload: hikeInfo,
                type: 'DISPLAY_COMPLETED',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting completed hikes.')
        })
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Start Date</TableCell>
                                <TableCell>End Date</TableCell>
                                <TableCell>Starting Mile Marker</TableCell>
                                <TableCell>Ending Mile Marker</TableCell>
                                <TableCell>Completed</TableCell>
                                <TableCell>Starting Trailhead</TableCell>
                                <TableCell>Ending Trailhead</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.hike.map((hike, i) => {
                                return (
                                    <TableRow key={i} >
                                        <TableCell>{moment(hike.date_start).format('MM-DD-YYYY')}</TableCell>
                                        <TableCell>{moment(hike.date_end).format('MM-DD-YYYY')}</TableCell>
                                        <TableCell>{hike.mile_start}</TableCell>
                                        <TableCell>{hike.mile_end}</TableCell>
                                        <TableCell>{hike.completed}</TableCell>
                                        <TableCell>{hike.trailhead_start_id}</TableCell>
                                        <TableCell>{hike.trailhead_end_id}</TableCell>
                                        <TableCell>{hike.comments}</TableCell>
                                        
                                    </TableRow>
                                )
                            })
                            }
                        </TableBody>
                    </Table>
                    </Paper>
                </div>
            );
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default connect(MapStateToProps)(HikeHistoryTable);






