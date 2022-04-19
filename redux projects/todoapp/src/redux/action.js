import {COMPLETE_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO} from './actionType';

export const completeTodo=(todo)=>({
    type:COMPLETE_TODO,
    payload:todo,
})

export const addTodo=(todo)=>({
    type:ADD_TODO,
    payload:todo,
})

export const deleteTodo=(todo)=>({
    type:DELETE_TODO,
    payload:todo,
})

export const updateTodo=(todo)=>({
    type:UPDATE_TODO,
    payload:todo,
})

//in action, we define only action and payload(where actually action is performed)