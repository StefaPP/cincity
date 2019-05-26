import { combineReducers } from 'redux'
import movies from './movies';
import auth from './auth';

const rootReducer = combineReducers({
  movies,
  auth
});

export default rootReducer;