import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import inputHike from './inputHikeReducer';

const store = combineReducers({
  user,
  login,
  inputHike,
});

export default store;
