import React, { useContext } from 'react';
import { Biodata } from './ComA';

const Comc = () => {
    const name= useContext(Biodata);
    return (
        <>
           <h1>Welcome {name}</h1> 
        </>
    )
}

export default Comc;