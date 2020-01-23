import { GET_GARMENTS, GARMENTS_LOADING, ADD_GARMENT, GARMENTS_ADDING, DELETE_GARMENT } from '../actions/types'

const initialState = {
  garments: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_GARMENTS:
      return {
        ...state,
        garments: action.payload,
        loading: false
      };
    
    case GARMENTS_LOADING:
      return {
        ...state,
        loading: true
      };
    
    case DELETE_GARMENT:
      return {
        ...state,
        garments: state.garments.filter(garment => garment._id != action.payload)
      };

    case ADD_GARMENT:
      console.log('reducer addin')
      return {
        ...state,
        garments: [action.payload, ...state.garments],
        loading: false
      };

    case GARMENTS_ADDING:
      return {
        ...state,
        loading: true
      };
    default:
      return state
  }
}