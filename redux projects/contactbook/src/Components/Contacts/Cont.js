import React from 'react'
import Avatar from 'react-avatar';

const Cont = ({contact}) => {
    // console.log(contact);
    const {name,phone,email}=contact;
    return (
        <>
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-label" />
                        <label className="custom-control-label"></label>
                    </div>

                </td>
                <td><Avatar className="mr-2" name={name} size='45' round={true}/> {name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td className="actions">
                    <a href="#">
                        <span className="material-icons mr-2">edit</span>
                    </a>
                    <a href="#">
                        <span className="material-icons text-danger">delete</span>
                    </a>
                </td>
            </tr>
        </>
    )
}

export default Cont
