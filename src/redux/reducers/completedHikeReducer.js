// import { combineReducers } from 'redux';

const completedHike = (state = [], action) => {
    if (action.type === 'DISPLAY_COMPLETED') {
        return action.payload;
    }
    return state;
}

export default completedHike;