import React, { useEffect, useState } from 'react'

const CleanupFunction = () => {
    const [screenWidth,setScreenWidth]=useState(window.screen.width);
    
    const actualWidth=()=>{
        // console.log(window.innerWidth);
        setScreenWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize',actualWidth);

        //cleanup function code
        return ()=>{
            window.removeEventListener('resize',actualWidth);
        }
    });

    return (
        <>
            <p>The Actual size of windows is</p>
            <h1>{screenWidth}</h1>
        </>
    )
}

export default CleanupFunction;

//use of CleanUp function =clean the Event Listener function which is created in browswer memory
// i.e here due to innerWidth so many instance is created in memory (go to element(open developer tool), 
//in element go to event Listener)