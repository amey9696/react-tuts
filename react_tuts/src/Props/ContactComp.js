import React from "react"

function ContactComp(props){
    return(
    <div>
        <p>hi</p>
        <img src={props.contact.imgURL}/>
        <h3>{props.contact.name}</h3>
        <p>{props.contact.phone}</p>
        <p>{props.contact.email}</p>
    </div>
    )
}
export default ContactComp