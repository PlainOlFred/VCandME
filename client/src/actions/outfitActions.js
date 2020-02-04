import axios from 'axios';
import { GET_OUTFITS, TRY_ON_GARMENT } from './types';
import { disconnect } from 'mongoose';



export const getOutfits = () => dispatch => {
  axios.get('/api/garments')
    .then( res => dispatch({
      type: GET_OUTFITS,
      payload: res.data
    }))
}

export const tryOnGarment = (garment) => dispatch => {
  dispatch({
    type: TRY_ON_GARMENT,
    payload: garment
  });
} 



export const deleteOutfit = (id) => dispatch => {
 
}

export const addOufit = outfit => dispatch => {
  
   

}



