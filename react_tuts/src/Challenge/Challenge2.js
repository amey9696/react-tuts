import React from 'react'

const Challenge2 = () => {
    const name="Amey";
    const date=new Date().getDate();
    const month=new Date().getMonth();
    const year=new Date().getFullYear();

    const hour=new Date().getHours();
    const minute=new Date().getMinutes();
    return (
        <>
            <h1>{`My Name is ${name}`}</h1>
            <p>Current date is {date+"/"+month+"/"+year}</p>
            <p>Current Time is {hour+":"+minute}</p>
        </>
    )
}

export default Challenge2
