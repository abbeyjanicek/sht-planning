import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import upcomingHike from './upcomingHikeReducer';
import completedHike from './completedHikeReducer';
import addHike from './addHikeReducer';
import campsiteData from './campsiteDataReducer';

const store = combineReducers({
  user,
  login,
  upcomingHike,
  completedHike,
  addHike,
  campsiteData,
});

export default store;
