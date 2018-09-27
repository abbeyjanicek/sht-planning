import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import upcomingHike from './upcomingHikeReducer';
import completedHike from './completedHikeReducer';
import hikeToAdd from './hikeToAddReducer';
import campsiteData from './campsiteDataReducer';
import campsiteToAdd from './addCampsiteReducer';
import reviewToAdd from './addReviewReducer';
import trailheadData from './trailheadDataReducer';
import addedCampsites from './addCampsiteReducer';
// import addedHike from './addedHikeReducer'


const store = combineReducers({
  user,
  login,
  upcomingHike,
  completedHike,
  hikeToAdd,
  campsiteData,
  campsiteToAdd,
  reviewToAdd,
  trailheadData,
  addedCampsites,
  // addedHike,
});

export default store;
