import { combineReducers } from 'redux';

const startTrailheadToAdd = (state = [], action) => {
    if (action.type === 'ADD_START_TRAILHEAD_NAME') {
        return {...state, trailhead_id: action.payload};
    } 
    return state;
}

export default combineReducers({
    startTrailheadToAdd
})