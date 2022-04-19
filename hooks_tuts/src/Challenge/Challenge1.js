import React,{useState} from 'react'

const Challenge1 = () => {
    const [name, setName] = useState('Welcome to my site');
    const changeName = () => {
        (name==='Welcome to my site') ? setName('Hello User..!How are you?'):setName('Welcome to my site')
    }
    return (
        <>
            <h1>{name}</h1>
            <button className="btn" onClick={changeName}>Click Me plz</button>
        </>
    )
}

export default Challenge1;