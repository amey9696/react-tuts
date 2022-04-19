import './css/todolist.css';
import TodoInput from './TodoInput';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {completeTodo, addTodo, deleteTodo, updateTodo} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const state=useSelector((state)=>({...state.todos}));
    let dispatch=useDispatch();

    const create=(newTodo)=>{
        dispatch(addTodo(newTodo));
    }

    const update=(id, updatedTask)=>{
        dispatch(updateTodo({id, updatedTask}));
    }

    return (
        <div className="TodoList">
            <h1>Todo App with React Redux</h1>
            <TodoInput createTodo={create}/>
            <ul>
                <TransitionGroup className="todo-list">
                    {state.todos && state.todos.map((todo)=>{
                        return (
                            <CSSTransition key={todo.id} className="todo">
                                {/* <h2>{todo.task}</h2> */}
                                <Todo
                                   key={todo.id}
                                   id={todo.id}
                                   task={todo.task}
                                   completed={todo.completed} 
                                   toggleTodo={()=>dispatch(completeTodo(todo))}
                                   deleteTodo={()=>dispatch(deleteTodo(todo))}
                                   updateTodo={update}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default TodoList;