import uuid from 'uuid';
import { GET_GARMENTS, ADD_GARMENT, DELETE_GARMENT } from '../actions/types'

const initialState = {
  garments: [
      {id: uuid(), brand: "Polo", color: "green", picture: "image", type: "top"},
      {id: uuid(), brand: "Polo", color: "white", picture: "image", type: "top"},
      {id: uuid(), brand: "Hillfigure", color: "black", picture: "image", type: "bottom"},
      {id: uuid(), brand: "Guess", color: "black", picture: "image", type: "bottom"},
      {id: uuid(), brand: "Old Navy", color: "Blue", picture: "image", type: "top"}
    ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_GARMENTS:
      return {
        ...state
      }
    
    case DELETE_GARMENT:
      return {
        ...state,
        garments: state.garments.filter(garment => garment.id != action.payload)
      }
    default:
      return state
  }
}