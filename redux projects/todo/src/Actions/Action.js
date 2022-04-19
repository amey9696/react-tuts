import { COMPLETE_TODO,ADD_TODO, DELETE_TODO, UPDATE_TODO} from './actionType';

export const completeTodo=(data)=>({
    type:COMPLETE_TODO,
    payload:{
        data:data
    }
})

export const addTodo=(data)=>{
    return {
        type:ADD_TODO,
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo=(data)=>{
    return {
        type:DELETE_TODO,
        payload:{
            data:data
        }
    }
}

export const updateTodo=(data)=>{
    return {
        type:UPDATE_TODO,
        payload:{
            data:data
        }
    }
}