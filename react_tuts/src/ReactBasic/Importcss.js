import React from 'react';
import "../style.css";

function Importcss() {
    const name="Amey";
    const link="www.facebook.com";
    return (
        <>
            <h1 className="heading">My name is {name}</h1>
            <a href={link} target="_blank">
                <img src="./img2.png" alt="bg image"/> 
            </a>
        </>
    )
}

export default Importcss
