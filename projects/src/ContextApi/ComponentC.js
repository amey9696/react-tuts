import React, { useContext } from 'react'
import { FirstName,LastName } from './ContextApi';

const ComponentC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
            {/* <FirstName.Consumer>
                {(fname)=>{
                    return(
                        <LastName.Consumer>
                            {(lname)=>{
                                return <h3>My name is {fname} {lname}</h3> 
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer> */}
             <h3>My name is {fname} {lname}</h3> 
        </>
    )
}

export default ComponentC;