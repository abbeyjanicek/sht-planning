// const defaultCampsite = [ 
//     {campsite_id: '',
//         date: '',
//     }
// ]
const defaultCampsite = {
    campsite: '',
    date: '',
}
const campsiteToAdd = (state = defaultCampsite, action) => {
    if (action.type === 'ADD_CAMPSITE') {
        return {...state, campsite_id: action.payload};
    } else if (action.type === 'ADD_CAMPSITE_DATE') {
        return {...state, date: action.payload};
    }
    return state;
}

export default campsiteToAdd;