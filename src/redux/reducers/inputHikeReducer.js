// import { combineReducers } from 'redux';

const inputHike = (state = [], action) => {
    if (action.type === 'DISPLAY_ITEMS') {
        return action.payload;
    }
    return state;
}

export default inputHike;