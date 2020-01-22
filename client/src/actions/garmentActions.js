import { GET_GARMENTS, ADD_GARMENT, DELETE_GARMENT } from './types';



export const getGarments = () => {
  return {
    type: GET_GARMENTS
  }
}

export const deleteGarment = (id) => {
  return {
    type: DELETE_GARMENT,
    payload: id
  }
}