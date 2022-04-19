import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <h1>404 Error Page</h1>  
            <h2>Oops..! Page not found</h2>
            <NavLink to="/">Go Back</NavLink>
        </>
    )
}

export default Error;