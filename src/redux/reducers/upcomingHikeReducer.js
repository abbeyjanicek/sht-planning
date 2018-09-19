// import { combineReducers } from 'redux';

const upcomingHike = (state = [], action) => {
    if (action.type === 'DISPLAY_UPCOMING') {
        return action.payload;
    }
    return state;
}

export default upcomingHike;