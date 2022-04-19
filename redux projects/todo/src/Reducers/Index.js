import todoReducer from "./Reducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({ //rootReducer is suggest by redux so dont change
    todoReducer
})

export default rootReducer;