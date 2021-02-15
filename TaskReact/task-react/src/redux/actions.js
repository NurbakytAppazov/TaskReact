import { LOAD_DATA } from "./types"

export const loadData = (data) => {
   return {
      type: LOAD_DATA, payload: data
   }
}
export const setData = (data) => {
   localStorage.setItem('save', JSON.stringify(data));

   return {
      type: LOAD_DATA, payload: data
   }
}