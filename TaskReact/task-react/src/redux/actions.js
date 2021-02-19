import { FIRST_PAN, LOAD_FALSE, LOAD_PANS, LOAD_SURAK, LOAD_TRUE, SET_DATA, SET_SURAK, SIGN_IN, SIGN_OUT } from "./types"


// LOADING ACTIONS
export const setLoadTrue = () => {
   return { type: LOAD_TRUE }
}
export const setLoadFalse = () => {
   return { type: LOAD_FALSE }
}

// AUTH ACTIONS
export const signIn = (data) => {
   return { type: SIGN_IN, payload: data }
}
export const signOut = (data) => {
   return { type: SIGN_OUT, payload: data }
}



// PAN ACTIONS
export const loadPans = (data) => {
   // localStorage.setItem('pans', JSON.stringify(data))
   return {
      type: LOAD_PANS, payload: data
   }
}
export const firstPan = (data) => {
   // localStorage.setItem('pans', JSON.stringify(data))
   return {
      type: FIRST_PAN, payload: data
   }
}


// SURAK ACTIONS
export const loadSurak = (data, index) => {
   // localStorage.setItem('surak', JSON.stringify(data))
   return {
      type: LOAD_SURAK, payload: data, index
   }
}
export const setSurak = (data, index) => {
   // localStorage.setItem('surak', JSON.stringify(data))
   return {
      type: SET_SURAK, payload: data, index
   }
}




export const setData = (data) => {
   return {
      type: SET_DATA, payload: data
   }
}

