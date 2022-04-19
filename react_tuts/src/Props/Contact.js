import React from "react"
import ContactComp from "./ContactComp"
import data from "./ContactData"
function Contact(){
    const contactComponent=data.map(user=>
         <ContactComp contact={{
                name:user.name,
                phone:user.phone,
                email:user.email,
                imgURL:user.imgURL
                }}/>
    )
    return(
        <div>
            {contactComponent}
        </div>

    )
}
export default Contact