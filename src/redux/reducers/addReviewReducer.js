

const reviewToAdd = (state = [], action) => {
    if (action.type === 'ADD_CAMPSITE_REVIEW_NAME') {
        return { ...state, campsite_id: action.payload };
    } else if (action.type === 'ADD_CAMPSITE_RATING') {
        return { ...state, rating: action.payload };
    } else if (action.type === 'ADD_CAMPSITE_REVIEW') {
        return { ...state, review: action.payload };
    }
    return state;
}

export default reviewToAdd;
