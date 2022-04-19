//require incr.css
//using ... (spread operator)
import React, { useState } from 'react'

const Challenge7 = () => {
    const [fullName,setfullName]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        qual:"",
    });

    const inputEvent=(event)=>{
        //object Destructuring
        const {name,value}=event.target;

        setfullName((prevValue)=>{
            return{
                ...prevValue,
                [name]:value,
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
            <p>Qualification is:- {fullName.qual}</p>
            <input type="text" placeholder="Enter your Name"
                onChange={inputEvent} value={fullName.fname}
                name='fname' autoComplete='off' //autoComplete auto suggestion off
            />
            <br/>
            <input type="text" placeholder="Enter your Last name"
                onChange={inputEvent} value={fullName.lname}
                name='lname' autoComplete='off'                      
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
            <input type="text" placeholder="Enter your Qualification"
                onChange={inputEvent} value={fullName.qual}
                name='qual' autoComplete='off'                     
            />
            <br/>
            <button type="submit"  onClick={onSubmit}>Submit 👍</button> 
        </form>
    </div>
    )
}

export default Challenge7;