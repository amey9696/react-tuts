import React, { useState } from 'react';

const Simple = () => {
    const [name, setName] = useState('Welcome to my site');
    const changeName = () => {
        setName('Hello User..!How are you?');
    }
    return (
        <>
            <h1>{name}</h1>
            <button className="btn" onClick={changeName}>Click Me plz</button>
        </>
    )
}
export default Simple;