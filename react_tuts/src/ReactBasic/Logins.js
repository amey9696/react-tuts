//require incr.css
import React, { useState } from 'react'

const Logins = () => {
    const [fullName,setfullName]=useState({
        fname:"",
        lname:"",
    });

    const inputEvent=(event)=>{
        // console.log(event.target.value);
        // console.log(event.target.name);
        
        // setfullName(event.target.value);
        const value=event.target.value;
        const name=event.target.name;

        setfullName((prevValue)=>{
            // console.log(prevValue);
            if(name==='fName'){
                return{
                    fname:value,
                    lname:prevValue.lname,
                }
            }
            else if(name==='lName'){
                return{
                    fname:prevValue.fname,
                    lname:value,
                }
            }
        })
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();
        // alert('from submitted') 
    }

    return (
    <div className="main_div">
        <form>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <input type="text" placeholder="Enter your Name"
                onChange={inputEvent} value={fullName.fname}
                name='fName'
            />
            <br/>
            <input type="text" placeholder="Enter your Last name"
                onChange={inputEvent} value={fullName.lname}
                name='lName'                        
            />
            <br/>
            <button type="submit"  onClick={onSubmit}>Submit 👍</button> 
        </form>
    </div>
    )
}
export default Logins;