import {COMPLETE_TODO, ADD_TODO, DELETE_TODO,UPDATE_TODO} from './actionType';
import {v4 as uuidv4} from 'uuid';

const initialState={
    // todos:[{id:1, task:"complete project", completed:false}],
    todos:'',
}

const todoReducer=(state=initialState, action)=>{
    if(action.type===COMPLETE_TODO){
        const toggleTodos=state.todos.map((t)=>
        t.id===action.payload.id ? {...action.payload, completed: !action.payload.completed}:t)
        return {
            ...state, //spread operator i.e spread all data here
            todos:toggleTodos, //save new data into todos
        }
    }
    else if(action.type===ADD_TODO){
        const newTodo={
            id:uuidv4(),
            task:action.payload,
            completed:false,
        }
        const addedTodos=[...state.todos, newTodo];
        return {
            ...state,
            todos:addedTodos,
        }
    }
    else if(action.type===DELETE_TODO){
        const filterTodo=state.todos.filter((t)=> t.id !==action.payload.id )
        return {
            ...state,
            todos:filterTodo,
        }
    }
    else if(action.type===UPDATE_TODO){
        const updateTodo=state.todos.map((todo)=>{
            if(todo.id===action.payload.id){
                return {...state, task:action.payload.updatedTask}
            }
            return todo;
        });
        return {
            ...state,
            todos:updateTodo,
        }
    }
    else{
        return state;
    }
}
export default todoReducer;

//REDUCER TAKE CURRENT STATE FROM ACTION AND PERFORM A LOGIC AND GIVE NEW STATE WHICH STORE IN REDUX STORE I.E store.js file