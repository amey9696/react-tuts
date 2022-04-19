import React,{useState} from 'react'

const Challenge2 = () => {
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

    const removeElem=(id)=>{
        const myData=myArray.filter((curElem)=>{
            return curElem.id!==id;
        })
        setmyArray(myData);
    }

    return (
        <>
            {
                myArray.map((curElem)=>{
                    return(
                        <h1 className="h1style" key={curElem.id}>Name: {curElem.name} & Age: {curElem.age}
                        <button className="btnrmv" onClick={()=>removeElem(curElem.id)}>Remove</button>
                        </h1>
                    )
                })
            }
            <button className="btnclr" onClick={clearArray}>Clear</button>
        </>
    )
}
export default Challenge2
