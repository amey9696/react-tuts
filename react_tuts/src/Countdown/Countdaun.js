import React from 'react'
import Countdown from 'react-countdown'
const Countdaun = () => {
    return (
        <div>
            <Countdown date={Date.now() + 10000} />
        </div>
    )
}

export default Countdaun
