//require incr.css
import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState();
    const [fullName, setfullName]=useState('world');

    const inputEvent=(event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    }
    
    const onSubmit=(e)=>{
        e.preventDefault(); //form behaviour is if user submit form then formdata is erased (page refreshed), preventDefault can stop these behaviour
        setfullName(name) ;
    }

    return (
        <div className="main_div">
            <form  onClick={onSubmit}>
                <h1>Hello {fullName}</h1>
                <input type="text" placeholder="Enter your Name"
                    onChange={inputEvent}
                    value={name} //this value={name} controlled by the react
                />
                <br/>
                <button type="submit">Submit 👍</button> 
            </form>
        </div>
    )
}
export default Form;