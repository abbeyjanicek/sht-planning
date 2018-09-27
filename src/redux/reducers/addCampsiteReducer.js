import { combineReducers } from 'redux';

const defaultCampsite = {
    campsite_id: '',
    date: '',
    site_name: '',
}
const campsiteToAdd = (state = defaultCampsite, action) => {
    if (action.type === 'ADD_CAMPSITE') {
        return { ...state, campsite_id: action.payload };
    } else if (action.type === 'ADD_CAMPSITE_DATE') {
        return { ...state, date: action.payload };
    } else if (action.type === 'ADD_CAMPSITE_NAME') {
        return { ...state, site_name: action.payload };
    }
    return state;
}

const addedCampsites = (state = [], action) => {
    if (action.type === 'CAMPSITE_ADDED') {
        return [ ...state, action.payload ];
    }
    return state;
}


export default combineReducers({
    campsiteToAdd,
    addedCampsites,
});

