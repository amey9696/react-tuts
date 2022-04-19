import React, { createContext } from 'react';
import ComB from './ComB';

//1. context created
const Biodata=createContext();

const ComA = () => {
    return (
        <>
            <Biodata.Provider value={"Amey"}>
                <ComB/>  
            </Biodata.Provider>
        </>
    )
}

export default ComA;
export {Biodata};