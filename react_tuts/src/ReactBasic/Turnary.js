//Write a program to  check today is sunday or not if sunday then display goto mall if not then display go to college.
import React from 'react';

const Turnary = () => {
    const day=new Date().getDay();
    let message='';

    (day=='sunday') ? message="Go to Mall" : message =" Go to College";
    return(
        <>
            <h1>Today is {day}. <span>{message}</span></h1>  
        </>    
    )
}
export default Turnary;