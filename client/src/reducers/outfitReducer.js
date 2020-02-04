import { GET_OUTFITS, ADD_OUTFIT, DELETE_OUTFIT, TRY_ON_GARMENT} from '../actions/types'

const initialState = {
  outfits: [],
  currentTop: {},
  currentBottom: {},
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_OUTFITS:
      return {
        ...state
      }
    
    case ADD_OUTFIT: 
      return {
        ...state
      }

    case DELETE_OUTFIT:
      return {
        ...state
      }
    
    case TRY_ON_GARMENT:
       switch(action.payload.type) {
         case 'top':
           return {
            ...state,
            currentTop: action.payload
          }

        case 'bottom':
           return {
            ...state,
            currentBottom: action.payload
          }

        case 'full':
           return {
            ...state,
            currentTop: action.payload,
            currentBottom: {}
          }
       }
      

    default:
      return state
  }
}