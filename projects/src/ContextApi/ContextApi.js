import React, { createContext } from 'react';
import ComponentA from './ComponentA';

const FirstName=createContext();
const LastName=createContext();

const ContextApi = () => {
    return (
        <>
            <FirstName.Provider value={'Amey'}>
                <LastName.Provider value={'Palshetkar'}>
                    <ComponentA/>
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default ContextApi;
export {FirstName, LastName};