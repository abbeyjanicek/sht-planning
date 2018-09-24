import { combineReducers } from 'redux';

const endTrailheadToAdd = (state = [], action) => {
    if (action.type === 'ADD_END_TRAILHEAD_NAME') {
        return {...state, trailhead_id: action.payload};
    } 
    return state;
}

export default combineReducers({
    endTrailheadToAdd
})