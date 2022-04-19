import React from 'react';
import '../challenge3.css';

const Challenge3 = () => {
    const hour=new Date().getHours();
    let message='';

    const cssStyle={ }

    if(hour>=4 && hour<12){
        message="Good Morning";
        cssStyle.color='green';
    }
    else if(hour>=12 && hour<=15){
        message="Good Afternoon";
        cssStyle.color='Red';
    }
    else if(hour>=15 && hour<=19){
        message="Good Evening";
        cssStyle.color='Orange';
    }
    else if(hour>=19 && hour<=24 || hour>=0 && hour<=4){
        message="Good Night";
        cssStyle.color='Black';
    }
    return (
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}>{message}</span></h1>  
            </div>
        </>
    )
}
export default Challenge3;
// remove all comments in challenge3.css when use this file