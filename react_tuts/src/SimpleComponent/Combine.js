import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer,{myFav, Editor, System, Add} from './Footer'

function Combine(){
    return (
        <>
            <Header/> 
            <Body/> 
            <p>{Footer}</p>
            <p>{myFav}</p>
            <p>{Editor()}</p>
            <p>My Laptop os is {System()}</p>
            <p>Sum of two no is {Add(8,73)}</p>
        </>
    )
}

export default Combine
