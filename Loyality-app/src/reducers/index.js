
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import pointReducer from './pointReducer';

const rootReducer = combineReducers({
  user: userReducer,
  points: pointReducer,
});

export default rootReducer;
