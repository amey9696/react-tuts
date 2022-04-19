import React, {  useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    const updateNum=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        document.title=`Chats ${count}`;
    })

    //INTERVIEW QUESTIONS?
    //which one has higher priority?
    // useEffect(()=>{
    //     console.log("Hello UseEffects"); //2
    // })
    // console.log("hello ouside useEffect"); //1
return (
        <>
            <h1>{count}</h1>
           <button className="btn" onClick={updateNum}>Click Me 😄</button> 
        </>
    )
}

export default UseEffect;