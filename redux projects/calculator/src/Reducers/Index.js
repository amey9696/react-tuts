import changeTheNumber from "./Reducer";
import multdivTheNumber from "./MultDiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
    // changeBackground, // it is user created actions
        changeTheNumber,
        multdivTheNumber
    }
);

export default rootReducer;