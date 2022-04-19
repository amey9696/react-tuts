import React, { useState } from 'react';

const Challenge5 = () => {
                        //basic logic
    // const [time,setTime]=useState(0);
    // const getTime=()=>{
        //     const hour=new Date().getHours();
    //     if(hour>=0 && hour<=12){
        //         const minute=new Date().getMinutes();
        //         const second=new Date().getSeconds();
        //         const curTime= hour+":"+minute+":"+second +" AM";
        //         setTime(curTime);
        //     }else{
            //         const minute=new Date().getMinutes();
            //         const second=new Date().getSeconds();
            //         const curTime= hour+":"+minute+":"+second +" PM";
            //         setTime(curTime);
            //     } 
            // } 

                    // modern logic 
    let newTime=new Date().toLocaleTimeString();
    const [time,setTime]=useState(newTime);
    
    const getTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return (
        <>
            <h1>{time}</h1>
            <button onClick={getTime}>Get Time</button>
        </>
    )
}
export default Challenge5;