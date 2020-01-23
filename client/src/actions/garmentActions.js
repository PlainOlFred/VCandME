import axios from 'axios';
import { GET_GARMENTS, GARMENTS_LOADING, ADD_GARMENT, GARMENTS_ADDING, DELETE_GARMENT } from './types';
import { disconnect } from 'mongoose';



export const getGarments = () => dispatch => {
  dispatch(setGarmentsLoading());
  axios.get('/api/garments')
    .then( res => dispatch({
      type: GET_GARMENTS,
      payload: res.data
    }))
}

export const setGarmentsLoading = () => {
  return {
    type: GARMENTS_LOADING
  }
}

export const deleteGarment = (id) => dispatch => {
  axios.delete(`/api/garments/${id}`)
    .then(res => dispatch({
      type: DELETE_GARMENT,
      payload: id
    }))
}

export const addGarment = garment => dispatch => {
  dispatch(setGarmentsAdding());
   
  axios({
    method:'post',
    url: '/api/garments',
    data: garment
  })
  .then( res => dispatch({
    type: ADD_GARMENT,
    payload: res.data
  }))
}



export const setGarmentsAdding = () => {
  return {
    type: GARMENTS_ADDING
  }
}