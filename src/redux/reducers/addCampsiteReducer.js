// const defaultCampsite = [ 
//     {campsite_id: '',
//         date: '',
//     }
// ]

const campsiteToAdd = (state = [], action) => {
    if (action.type === 'ADD_CAMPSITE') {
        return [...state, {campsite_id: action.payload, date: action.payload}];
    }
    return state;
}

export default campsiteToAdd;