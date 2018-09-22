import { combineReducers } from 'redux';

const campsiteToAdd = (state = [], action) => {
    if (action.type === 'ADD_CAMPSITE_NAME') {
        return {...state, campsite_id: action.payload};
    } else if (action.type === 'ADD_CAMPSITE_DATE') {
        return {...state, date: action.payload};
    }
    return state;
}

export default combineReducers({
    campsiteToAdd
})