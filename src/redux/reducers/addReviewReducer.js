

const reviewToAdd = (state = [], action) => {
    if (action.type === 'ADD_CAMPSITE_REVIEW_NAME') {
        return {...state, campsite_id: action.payload};
    } 
    return state;
}

export default reviewToAdd;
