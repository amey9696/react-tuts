import React, { useState } from 'react'
import useMyHook from './useMyHook';

const CustomHooks = () => {
    const [count, setCount] = useState(0);
    
    const updateNum = () => {
        setCount(count + 1);
    }

    //custom hooks
    useMyHook(count);

    return (
        <>
            <h1>{count}</h1>
            <button className="btn" onClick={updateNum}>Click 😄</button>
        </>
    )
}

export default CustomHooks;