import {combineReducers} from 'redux';
import todoReducer from './reducer';
 
const rootReducer=combineReducers({
    // todoReducer,
    todos :todoReducer,
})

export default rootReducer;