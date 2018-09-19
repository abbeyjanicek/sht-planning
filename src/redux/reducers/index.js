import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import upcomingHike from './upcomingHikeReducer';
import completedHike from './completedHikeReducer';

const store = combineReducers({
  user,
  login,
  upcomingHike,
  completedHike,
});

export default store;
