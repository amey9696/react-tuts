import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, RemoveTodo } from '../Actions/Action';
import './todo.css';

const Todo = () => {
    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        {/* <img src={todo} alt="Todo Logo"/>  */}
                        <figcaption>Add your List Here 🤙 </figcaption>
                    </figure> 
                
                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Items Here"
                            value={input} onChange={(event)=>setInput(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={()=>dispatch(addTodo(input),setInput(''))}></i> 
                    </div>

                </div>
            </div> 
        </>
    )
}

export default Todo;