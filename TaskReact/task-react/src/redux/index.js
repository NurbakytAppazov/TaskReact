import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { panReducer } from "./reducers/panReducer";
import { surakReducer } from "./reducers/surakReducer";
import { loadingReducer } from "./reducers/loadingReducer";

export const allReducer = combineReducers({
   pans: panReducer,
   surak: surakReducer,
   auth: authReducer,
   loading: loadingReducer
})