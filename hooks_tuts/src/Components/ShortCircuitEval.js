import React, { useState } from 'react'

const ShortCircuitEval = () => {
    // const [demo,setDemo]=useState('sA');
    const [demo,setDemo]=useState('');
    return (
        <>
            <h1>SHORT CIRCUIT EVALUATION</h1>
            {/* <h1>{  demo || 'Amey'  }</h1> op is SA*/}
            {/* <h1>{ 'Amey' || demo }</h1>  op is Amey*/}
            <h1>{ demo ||  
                <>
                    <h1>Hello</h1>
                    <p>World</p>
                </>
            }</h1>
            <h1>{demo && 'Palshetkar'}</h1>
        </>
    )
}

export default ShortCircuitEval;