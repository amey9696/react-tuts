//require incr.css
import React, { useState } from 'react';
import "../Hooks/incr.css";

const Signup = () => {
    const [fullName,setfullName]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:""
    });

    const inputEvent=(event)=>{
        // const value=event.target.value;
        // const name=event.target.name;

        //object Destructuring
        const {value,name}=event.target;

        setfullName((prevValue)=>{
            if(name==='fName'){
                return{
                    fname:value,
                    lname:prevValue.lname,
                    email:prevValue.email,
                    phone:prevValue.phone
                }
            }
            else if(name==='lName'){
                return{
                    fname:prevValue.fname,
                    lname:value,
                    email:prevValue.email,
                    phone:prevValue.phone,
                }
            }
            else if(name==='email'){
                return{
                    fname:prevValue.fname,
                    lname:prevValue.lname,
                    email:value,
                    phone:prevValue.phone,
                }
            }
            else if(name==='phone'){
                return{
                    fname:prevValue.fname,
                    lname:prevValue.lname,
                    email:prevValue.email,
                    phone:value,
                }
            }
        })
    }
    
    const onSubmit=(e)=>{
        e.preventDefault(); 
        alert("form submitted")
    }

    return (
    <div className="main_div">
        <form>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p>Email is :-{fullName.email} </p>
            <p>Mobile No is:- {fullName.phone}</p>
            <input type="text" placeholder="Enter your Name"
                onChange={inputEvent} value={fullName.fname}
                name='fName' autoComplete='off' //autoComplete auto suggestion off
            />
            <br/>
            <input type="text" placeholder="Enter your Last name"
                onChange={inputEvent} value={fullName.lname}
                name='lName' autoComplete='off'                      
            />
            <br/>
            <input type="email" placeholder="Enter your Email"
                onChange={inputEvent} value={fullName.email}
                name='email' autoComplete='off'                     
            />
            <br/>
            <input type="number" placeholder="Enter your Mobile"
                onChange={inputEvent} value={fullName.phone}
                name='phone' autoComplete='off'                     
            />
            <br/>
            <button type="submit"  onClick={onSubmit}>Submit 👍</button> 
        </form>
    </div>
    )
}

export default Signup;