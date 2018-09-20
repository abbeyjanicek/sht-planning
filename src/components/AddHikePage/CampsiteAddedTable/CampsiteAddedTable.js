import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


const MapStateToProps = state => ({
    user: state.user,
});

class CampsiteAddedTable extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Campsite Name</th>
                            <th>Mile Marker</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>09/28/18</td>
                            <td>Red River Valley</td>
                            <td>0.3</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }

}

export default connect(MapStateToProps)(CampsiteAddedTable);