import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

import './DropdownMenu.css';
import Axios from 'axios';

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const MapStateToProps = state => ({
    user: state.user,
    trailhead: state.trailheadData,
    state,
});

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class TrailheadDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    componentDidMount() {
        // this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getTrailheads();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    getTrailheads = () => {
        console.log('in getTrailheads');

        Axios({
            method: 'GET',
            url: '/api/trailhead'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            const trailheadInfo = response.data;
            this.props.dispatch({
                payload: trailheadInfo,
                type: 'GET_TRAILHEAD',
            })
        }).catch((error) => {
            console.log('error: ', error);
            alert('There was an error getting trailheads.')
        })
    }


    handleChange = (event) => {
        console.log('in handleChange ');
        event.preventDefault();
        this.setState({ value: event.target.value });
        this.props.onDropdownChange(event);
    }

    
    render() {
        let content = null;
        const { classes } = this.props;
       

        if (this.props.user.userName) {
            
            content = (
                <div>
                    <form autoComplete="off">
                    {/* className={classes.root} */}
                        <FormControl >
                        {/* className={classes.formControl} */}
                            <InputLabel htmlFor="trailhead-simple"></InputLabel>
                            <Select value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value=""><em>Please Select</em></MenuItem>
                                {this.props.trailhead.map((trailheadInfo, i) => {
                                    return (
                                        <div>
                                        
                                        <MenuItem key={i} value={trailheadInfo.id} name="trailhead_name">{trailheadInfo.trailhead_name}</MenuItem>
                                        </div>
                            )
                                }
                                )
                                }
                            </Select>
                        </FormControl>
                    </form>
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
TrailheadDropdown.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default connect(MapStateToProps)(TrailheadDropdown);

