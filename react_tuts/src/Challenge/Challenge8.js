//uncomment challenge8.css code
import React, { useState } from 'react';
import './challenge8.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Challenge8 = () => {
    const [count,setCount]=useState(0);

    const IncNum=()=>{
        setCount(count +1);
    }

    const DecNum=()=>{
        if(count!=0){
            setCount(count -1);
        }
        else{
            alert("count is 0")
        }
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div ">
                    <h1>{count}</h1>
                    <div className="btn_div">
                        <button onClick={IncNum}><AddIcon/></button>      
                        <button onClick={DecNum}><RemoveIcon/></button>      
                    </div>
                </div>
            </div>
        </>
    )
}
export default Challenge8;