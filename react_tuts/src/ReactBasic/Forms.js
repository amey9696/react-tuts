import React, { useState } from 'react'

const Forms = () => {
    const [name,setName]=useState();
    const [fullName, setfullName]=useState('world');

    const inputEvent=(event)=>{
        // console.log(event.target.value);
        setName(event.target.value);
    }
    
    const onSubmit=()=>{
        setfullName(name) ;
    }

    return (
        <div>
            <h1>Hello {fullName}</h1>
            <input type="text" placeholder="Enter your Name"
                onChange={inputEvent}
                value={name} //this value={name} controlled by the react
            />
           <button onClick={onSubmit}>Submit 👍</button> 
        </div>
    )
}
export default Forms;