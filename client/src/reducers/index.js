import { combineReducers } from 'redux';
import garmentReducer from './garmentReducer';

export default combineReducers({
  garment: garmentReducer
})