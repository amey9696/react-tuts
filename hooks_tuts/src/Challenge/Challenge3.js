import React, { useState, useEffect } from 'react'

const Challenge3 = () => {
    const [count, setCount] = useState(0);
    
    const updateNum = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        (count == 0) ? document.title = `Chats` : document.title = `Chats ${count}`;
    });

    return (
        <>
            <h1>{count}</h1>
            <button className="btn" onClick={updateNum}>Click 😄</button>
        </>
    )
}

export default Challenge3;