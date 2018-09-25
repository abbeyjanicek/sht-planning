import { combineReducers } from 'redux';

const hikeToAdd = (state = [], action) => {
    if (action.type === 'ADD_COMPLETED') {
        return { ...state, completed: action.payload };
    } else if (action.type === 'ADD_START_DATE') {
        return { ...state, date_start: action.payload };
    } else if (action.type === 'ADD_END_DATE') {
        return { ...state, date_end: action.payload };
    } else if (action.type === 'ADD_MILE_START') {
        return { ...state, mile_start: action.payload };
    } else if (action.type === 'ADD_MILE_END') {
        return { ...state, mile_end: action.payload };
    } else if (action.type === 'ADD_TRAILHEAD_START') {
        return { ...state, trailhead_start: action.payload };
    } else if (action.type === 'ADD_TRAILHEAD_END') {
        return { ...state, trailhead_end: action.payload };
    } else if (action.type === 'DISPLAY_ADDED_CAMPSITE') {
        return { ...state, comments: action.payload };
    } else if (action.type === 'ADD_COMMENTS') {
        return { ...state, comments: action.payload };
    }
        return state;
    }

    export default combineReducers({
        hikeToAdd
    })