import React, {useState} from 'react'

const FormValidation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allData, NewAllData] = useState([]);

    const submitForm=(e)=>{
        e.preventDefault();
        if(email && password){
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!email.match(mailformat)){
                alert("email mot valid..please enter valid email ")
            }
            else if(password.length<6){
                alert("password should be at least 6 letter long")
            }
            else{
                const newEntry={id:new Date().getTime().toString(),email,password};
                NewAllData([...allData, newEntry]);
                // console.log(allData);
        
                setEmail('');
                setPassword('');
            }
        }
        else{
            alert("please fill all fields..")
        }
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
                        const {id,email,password}=curElem;
                        return (
                            <div className="showDetails" key={id}>
                                <p>{email}</p>
                                <p>{password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FormValidation;