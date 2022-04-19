import React, { useState } from 'react'

const Login = () => {
    const [name,setName]=useState('');
    const [lName, setlName]=useState('');
    const [firstName, setfirstName]=useState('');
    const [lastName, setlastName]=useState('');
    
    const onSubmit=(e)=>{
        e.preventDefault(); 
        setfirstName(name);
        setlastName(lName);
    }

    const inputEvent=(event)=>{
        setName(event.target.value);
    }
    
    const inputEventTwo=(event)=>{
        setlName(event.target.value);
    }
    
    return (
    <div>
        <form onClick={onSubmit}>
            <h1>Hello {firstName} {lastName}</h1>
            <input type="text" placeholder="Enter your Name"
                onChange={inputEvent} value={name}
            />
            <br/>
            <input type="text" placeholder="Enter your Lastname"
                onChange={inputEventTwo} value={lName}
            />
            <br/>
            <button type="submit">Submit 👍</button> 
        </form>
    </div>
    )
}
export default Login;