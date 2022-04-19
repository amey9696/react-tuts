import React, { useState } from 'react'
import './incr.css';

const Incr = () => {
    const state=useState(); //useState called as Hooks
    
    //array destructuring
    const [count,setCount]=useState(0); //const [curData, updatedData/func]=setStatetoZero/initialValue;
    //useState(0); this 0 goto count and then goto <h1> tag. It is current value
    
    const IncNum=()=>{
        setCount(count +1);
        //this setCount(100); 100 values is now current value i.e store in count then display on <h1> tag this 100 value
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Increment</button>    
        </>
    )
}
export default Incr