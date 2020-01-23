import axios from 'axios';
import { returnErrors } from './errorActions'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from "./types"

// load user
export const loadUser = () => (dispatch, getState) => {
  dispatch({type: USER_LOADING});

  
  axios.get('/api/auth/user', tokenConfig(getState) )
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch( err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

// sign up user
export const signUp = ({name, email, password}) => dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password})

  axios.post('/api/users', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAILED'))
      dispatch({
        type: REGISTER_FAILED
      });
      
    })
}

export const tokenConfig = getState => {
  // Token
  const token = getState().auth.token;

  // Header with Token
  const config = {
    header: {
      "Content-type": "application/json",
    }
  }
  
  if(token) {
    config.header['x-auth-token'] = token
  }

  return config;
}
