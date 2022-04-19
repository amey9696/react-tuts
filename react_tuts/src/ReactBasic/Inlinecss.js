import React from 'react'

function Inlinecss() {
    const name="Amey";
    const heading={
        color:'blue',
        textTransform:'capitalized',
        fontSize:"150px",
        textAlign:"center"
    }
    return (
        <>
            <h1 style={heading}>My name is {name}</h1> 
            <h1 style={{color:"red"}}>My name is {name}</h1> 
        </>
    )
}

export default Inlinecss
