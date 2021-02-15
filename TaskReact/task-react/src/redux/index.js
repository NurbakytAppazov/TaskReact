import { combineReducers } from "redux";
import { loadReducer } from "./reducers/loadReducer";

export const allReducer = combineReducers({
   load: loadReducer
})