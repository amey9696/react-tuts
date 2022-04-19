//3. We can directly import or we can directly write it using React.hookname
import React, { useState } from 'react'

//2. Component name must be PascalCase (first letter should) eg_ const HooksRule
const HooksRule = () => {
    //1. Always write it inside the component or function
    const [name,setName]=useState("amey");
    return (
        //dont use hooks inside loopsz nested and return statement
        // if(true){
        //     const [name,setName]=useState("amey");
        // }
        <>
        
            <h1>{name}</h1>
        </>
    )
}

export default HooksRule;