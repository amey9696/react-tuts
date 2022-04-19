import React from 'react'

const Attribute = () => {
    const name="Amey";
    const link="www.facebook.com";
    return (
        <>
           {/* <a href="#">Home</a>  */}
           {/* href="#" this is called as attribute of <*> tag*/}
            <h1 contentEditable="true">My name is {name}</h1>
           <a href={link} target="_blank">
                <img src="/img2.png" alt="bg image"/> 
           </a>
        </>
    )
}

export default Attribute
