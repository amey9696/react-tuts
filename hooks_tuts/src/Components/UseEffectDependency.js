import React, { useState, useEffect } from 'react'

const UseEffectDependency = () => {
    const [count, setCount] = useState(0);
    
    const updateNum = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("firt useEffect()"); //2nd priority
        (count == 0) ? document.title = `Chats` : document.title = `Chats ${count}`;
    }, [count]); //[] render only once time, it is called as useEffect dependency
    
    useEffect(() => {
        console.log("second useEffect()");//3rd priority
    }, []); 
    
    console.log("outer useEffect()");//1st priority

    return (
        <>
            <h1>{count}</h1>
            <button className="btn" onClick={updateNum}>Click 😄</button>
        </>
    )
}

export default UseEffectDependency;