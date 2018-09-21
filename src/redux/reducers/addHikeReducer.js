import { combineReducers } from 'redux';

const hikeToAdd = (state = [], action) => {
    if (action.type === 'ADD_HIKE') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    hikeToAdd
})