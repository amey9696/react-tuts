import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../store';
import { useHistory } from 'react-router';

const AddContact = () => {
    let history=useHistory();
    const dispatch=useDispatch();
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phone, setPhone]=useState("");

    const createContact=(e)=>{
        e.preventDefault();
        // console.log(name,phone,email);
        const new_contact={
            id:new Date().getTime().toString(),
            name:name,
            phone:phone,
            email:email,
        }
        dispatch(addContact(new_contact));
        history.push("/")
    }

    return (
        <>
            <div className="card-header shadow">
                <div className="card-header">Add a Contact</div>
                <div className="card-body">
                    <form onSubmit={(e)=>createContact(e)}>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" 
                            placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)} /> 
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" 
                            placeholder="Enter Your phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} /> 
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" 
                            placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} /> 
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddContact;