import changeTheNumber from "./Reducer";
import { combineReducers } from "redux";

const Reducers = combineReducers(
    {
    // changeBackground, // it is user created actions
        changeTheNumber
    }
);

export default Reducers;