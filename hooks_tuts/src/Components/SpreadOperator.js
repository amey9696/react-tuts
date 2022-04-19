import React,{useState} from 'react'

const SpreadOperator = () => {
    const [myArray,setmyArray]=useState({
        name:"ap", age:25, degree:'BE'
    });
    
    const updateArray=()=>{
        setmyArray({...myArray, name:'sa',age:23});
    }

    return (
        <>
           <h1 className="h1style">Name: {myArray.name} & Age: {myArray.age} & degree:{myArray.degree}</h1>
            <button className="btnclr" onClick={updateArray}>Update</button>
        </>
    )
}


export default SpreadOperator;