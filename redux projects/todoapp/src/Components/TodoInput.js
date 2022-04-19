import {useState} from 'react';
import './css/todoinput.css';

const TodoInput = ({createTodo}) => {
    const [task,  setTask]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault(); //from default behaviour stopped i.e after submit form browser refresh and form is clear
        createTodo(task);
        setTask('');
    }

    // const handleInput=(e)=>{
    //     setTask({
    //         ...task,
    //         [e.target.name]:e.target.value,
    //     })
    // }

    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Task name.." id="task"
                name="task" value={task} 
                // onChange={handleInput} />
                onChange={(e)=>setTask(e.target.value)} />
            <button>Add Todo</button> 
        </form>
    )
}

export default TodoInput;