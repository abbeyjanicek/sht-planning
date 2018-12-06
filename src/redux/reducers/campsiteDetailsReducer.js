// import {combineReducers} from 'redux';

// const defaultDetails = {
//     campsite_id: '',
//     site_name: '',
//     latitude: '',
//     longitude: '',
//     mile_marker: '',
//     review: '',
//     rating: '',
// }

const campsiteDetails = (state = [], action) => {
    if (action.type === 'DISPLAY_CAMPSITE_REVIEW') {
        return action.payload;
    } 
    return state
}

export default campsiteDetails;
    

