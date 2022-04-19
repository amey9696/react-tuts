import React, { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allData, NewAllData] = useState([]);

    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password};
        NewAllData([...allData, newEntry]);
        console.log(allData);
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoComplete="off"
                        value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="off"
                        value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button className="btnclr" type="submit">Login</button>
            </form>

            <div>
                {
                    allData.map((curElem)=>{
                        return (
                            <div className="showDetails">
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BasicForm;