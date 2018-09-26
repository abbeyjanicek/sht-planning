import React from 'react';
import PropTypes from 'prop-types';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';

const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
};

const MapStateToProps = state => ({
    user: state.user,
    completed: state.completed,
    state,
});

class CheckboxLabels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
        }
    };

    handleChange = value => event => {
        console.log('in handleChange');
        event.preventDefault();
        this.setState({ [value]: event.target.checked });
        this.props.dispatch({
            type: 'ADD_COMPLETED',
            payload: value,
        })
    };

    render() {
        const { classes } = this.props;

        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.completed}
                            onChange={this.handleChange('true')}
                            value="true"
                            color="primary"
                        />
                    }
                    label="Completed?"
                />
            </FormGroup>
        );
    }
}

CheckboxLabels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(MapStateToProps)(CheckboxLabels);
// export default withStyles(styles)(CheckboxLabels);