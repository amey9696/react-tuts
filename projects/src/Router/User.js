// Use of useParams, useLocation & useHistory:-
import React from 'react'
import { useParams, useLocation,useHistory } from 'react-router-dom'

//before hooks how to handle params in request
// const User = ({match}) => {
//     return (
//         <>
//             <h2>User {match.params.name} Page</h2>  
//         </>
//     )
// }

//after hooks
const User = () => {
    // const {name}=useParams();
    const {fname,lname}=useParams();
    const location=useLocation();
    // console.log(location);
    const history=useHistory();
    // console.log(history);
    
    const awesome=()=>{
        alert("you are awesome");
    }
    return (
        <>
            {/* <h2>User {name} Page</h2>   */}
            <h2>User {fname} {lname} Page</h2>  
            <p>My current location is {location.pathname}</p>
            {/* <p>please change the url name to see the effect of the <span style={{color:'red', fontSize:'30px'}}>useLocation Hooks</span> i.e change only in /amey/palshetkar position</p> */}
            <p>please press button to see the effect of the <span style={{color:'red', fontSize:'30px'}}>useHistory Hooks</span></p>
            {location.pathname===`/user/amey/palshetkar` ? 
            <button onClick={()=>history.push('/services')}>Go back</button> : null}
            {/* <button onClick={()=>history.goBack()}>Go back</button> : null} */}
            {/* below line used for useLocation (paste below the location.pathname line) */}
            {/* <button onClick={awesome}>Click Me</button> : null} */} 

        </>
    )
}

export default User;