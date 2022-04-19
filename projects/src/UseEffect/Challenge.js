import React, { useEffect, useState } from 'react'

const Challenge = () => {
    const [num,setNum]=useState(0);
    useEffect(()=>{
        // alert("clicked")
        document.title=`You clicked on ${num} times`;

                            // OR
        //first uncomment <title id="title"></title> from index.html then uncomment below code
        // const title=document.getElementById('title');
        // title.innerHTML=`You clicked on ${num} times`;
    }); 

    return (
        <>
            <button onClick={ ()=> {setNum(num+1) }}> Click Me {num}</button>
        </>
    )
}

export default Challenge
