import {useState} from 'react';
import './css/todo.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Todo = ({toggleTodo, task, completed, id ,deleteTodo, updateTodo}) => { //destructure the element & pass as a props
    const [isEditing, setIsEditing]=useState(false); //useState hooks 
    const [editTask, setEditTask]=useState(task);
    
    const handleUpdate=(e)=>{
        e.preventDefault(); //from default behaviour stopped i.e after submit form browser refresh and form is clear
        updateTodo(id, editTask);
        setIsEditing(false);
    }
    
    return (
        //use turnary operator here, similar like if else 
        <TransitionGroup className={completed ? "Todo completed" :"Todo"}>
           {isEditing ?(
                <CSSTransition key="editing" timeout={500} className="form">
                    <form className="Todo-edit-form" onSubmit={handleUpdate}>
                        <input type="text" name="task" value={editTask} 
                            onChange={(e)=>setEditTask(e.target.value)} 
                            style={{ flexGrow: 1, border:'none',background: '#f7f1f1', padding:' 0 1.5rem', fontSize: '1rem'}}    
                            />
                        <button className="btn">Save</button> 
                    </form>
                </CSSTransition>
           ):(
                <CSSTransition key="normal" timeout={500} className="task-text">
                        <li className="Todo-task" onClick={toggleTodo}>
                            {task}
                        </li>
                </CSSTransition>
           )}
           <div className="Todo-buttons">
                <button onClick={()=>setIsEditing(true)}><i class="fas fa-pen"></i></button>
                <button onClick={deleteTodo}><i class="fas fa-trash"></i></button>
           </div>
        </TransitionGroup>
    )
}

export default Todo;