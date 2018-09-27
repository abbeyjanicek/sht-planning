

const campsiteData = (state = [], action) => {
    if (action.type === 'GET_CAMPSITE') {
        return action.payload;
    } else if (action.type === 'DISPLAY_ADDED_CAMPSITE') {
        return {...state, campsite: action.payload};
    } else if (action.type === 'DISPLAY_CAMPSITE_REVIEW') {
        return action.payload;
    }
    return state;
}

export default campsiteData;


