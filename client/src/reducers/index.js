import { combineReducers } from 'redux';
import garmentReducer from './garmentReducer';
import outfitReducer from './outfitReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  garment: garmentReducer,
  outfit: outfitReducer,
  auth: authReducer,
  error: errorReducer
})