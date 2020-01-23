import { combineReducers } from 'redux';
import garmentReducer from './garmentReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  garment: garmentReducer,
  auth: authReducer,
  error: errorReducer
})