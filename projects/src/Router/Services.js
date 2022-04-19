import React from 'react';
import {useHistory} from 'react-router-dom';

const Services = () => {
    const history=useHistory();
    return (
        <>
           <h2>Services Page</h2> 
           <button onClick={history.goBack}>Go Back</button>
        </>
    )
}

export default Services;