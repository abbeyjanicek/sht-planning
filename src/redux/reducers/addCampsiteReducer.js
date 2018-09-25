// const defaultCampsite = [ 
//     {campsite_id: '',
//         date: '',
//     }
// ]

const campsiteToAdd = (state = [], action) => {
    if (action.type === 'ADD_CAMPSITE') {
        return [...state, {campsite_id: action.payload.campsite_id, date: action.payload.date}];
    }
    return state;
}

export default campsiteToAdd;