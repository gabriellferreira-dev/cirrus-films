import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import loginReducer from './loginReducer';

export const Reducers = combineReducers({
  moviesReducer,
  loginReducer,
});
