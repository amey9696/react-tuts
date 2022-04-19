import React, { useState } from 'react';

const ArrayinHooks = () => {
    const bioData=[
        {
            id:0,name:'ap',age:25
        },
        {
            id:1,name:'sa',age:22
        },
        {
            id:2,name:'mb',age:23
        }
    ]
    const [myArray,setmyArray]=useState(bioData);
    
    const clearArray=()=>{
        setmyArray([]);
    }

    return (
        <>
            {
                myArray.map((curElem)=><h1 className="h1style" key={curElem.id}>Name: {curElem.name} & Age: {curElem.age}</h1>)
            }
            <button className="btnclr" onClick={clearArray}>Clear</button>
        </>
    )
}

export default ArrayinHooks;