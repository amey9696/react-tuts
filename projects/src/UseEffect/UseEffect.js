import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [num,setNum]=useState(0);
    const [nums,setNums]=useState(0);
    useEffect(()=>{
        alert("clicked");
    },[num]); //[num] only first time useEffect() is run i.e when page is refresh and if you click on first button

    return (
        <>
            <button onClick={ ()=> {setNum(num+1) }}> Increment {num}</button>
            <br/>
            <button onClick={ ()=> {setNums(nums-1) }}> Decrement {nums}</button>
        </>
    )
}

export default UseEffect;