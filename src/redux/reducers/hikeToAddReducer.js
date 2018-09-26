

const defaultHike = {
    completed: false,
    date_start: '',
    date_end: '',
    mile_start: '',
    mile_end: '',
    trailhead_start: '',
    trailhead_end: '',
    comments: '',
}
const hikeToAdd = (state = defaultHike, action) => {
    if (action.type === 'ADD_COMPLETED') {
        return { ...state, completed: action.payload };
    } else if (action.type === 'ADD_START_DATE') {
        return { ...state, date_start: action.payload };
    } else if (action.type === 'ADD_END_DATE') {
        return { ...state, date_end: action.payload };
    } else if (action.type === 'ADD_MILE_START') {
        return { ...state, mile_start: action.payload };
    } else if (action.type === 'ADD_MILE_END') {
        return { ...state, mile_end: action.payload };
    } else if (action.type === 'ADD_TRAILHEAD_START') {
        return { ...state, trailhead_start_id: action.payload };
    } else if (action.type === 'ADD_TRAILHEAD_END') {
        return { ...state, trailhead_end_id: action.payload };
    } else if (action.type === 'ADD_COMMENTS') {
        return { ...state, comments: action.payload };
    }
        return state;
    }

    export default hikeToAdd;
