const trailheadData = (state = [], action) => {
    if (action.type === 'GET_TRAILHEAD') {
        return action.payload;
    }
    return state;
}

export default trailheadData;