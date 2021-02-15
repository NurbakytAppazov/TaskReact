import { LOAD_DATA, SET_DATA } from "../types";

const initialState = {
   data: null
}

export const loadReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_DATA:
         return {
            ...state,
            data: action.payload
         }
      case SET_DATA:
         return {
            ...state,
            data: action.payload
         }
      default:
         return state;
   }
}