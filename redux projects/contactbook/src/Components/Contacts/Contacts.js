import React from 'react'
import { useSelector } from 'react-redux';
import Cont from './Cont';

const Contacts = () => {
    const contacts=useSelector(state=>state.contacts)
    return (
        <>
            <table className="table shadow">
                <thead className="bg-nav text-white">
                    <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-label" />
                            <label className="custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact)=>{
                            return(
                                <Cont contact={contact} key={contact.id}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Contacts;