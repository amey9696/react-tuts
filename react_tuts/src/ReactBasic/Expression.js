import React from 'react'
import ReactDOM from 'react-dom';

const Expression = () => {
    const fname="Amey";
    const lname="Palshetkar";
    const lang="python";

    return (
        <>
            <h1>My Name is {fname} {lname}.</h1>
            <h1>{`My Name is ${fname} ${lname}.`}</h1>
            <h1>My Name is {fname +" "+ lname}.</h1>
            <h1>{`My Name is ${fname +" "+ lname}.`}</h1>
            <h2>My Favourite programming language is {lang}.</h2>
            <h3>The answer of 2 +3 is {2+3}.</h3>
            <h3>The square of 3 is {3*3}.</h3>
            <h3>Today lucky number is {Math.random()}.</h3>
        </>
    )
}

export default Expression
