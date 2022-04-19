import { COMPLETE_TODO,ADD_TODO, DELETE_TODO,UPDATE_TODO} from '../Actions/actionType';


//similar as const [list, setList]=useState();
const initialData={
    list:''
}

const todoReducer=(state=initialData,action)=>{
    switch(action.type){
        case ADD_TODO:
            // const {id,data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:action.payload.id,
                        data:action.payload.data
                    }
                ]
            }
        case COMPLETE_TODO:
            const toggleTodos=state.list.map((t)=>
            t.id===action.payload.id ? {...action.payload, completed: !action.payload.completed}:t)
            return {
                ...state, //spread operator i.e spread all data here
                list:toggleTodos, //save new data into todos
            }
        case DELETE_TODO:
            const filterTodo=state.list.filter((t)=> t.id !==action.payload.id )
            return {
                ...state,
                list:filterTodo,
            }
        case UPDATE_TODO:
            const updateTodo=state.list.map((data)=>{
                if(data.id===action.payload.id){
                    return {...state, task:action.payload.updatedTask}
                }
                return data;
            });
            return {
                ...state,
                list:updateTodo,
            }
        default:
            return state;
    }
}

export default todoReducer;