import React,{useState} from 'react'

const Challenge6 = () => {
    let newTime=new Date().toLocaleTimeString();
    const [time,setTime]=useState(newTime);
    
    const getTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setTime(newTime);
    }

    setInterval(getTime,1000)

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}

export default Challenge6;