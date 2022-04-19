import React ,{useState} from 'react'

const RectAngle = () => {
    const red='red';
    const [bg, setBg]=useState(red);
    const name="Color Change"

    const bgChange=()=>{
        const newBg="green";
        setBg(newBg);
        // alert("hell")
    }

    return (
        <>
            {/* {for(let i=1;i<=4;i++){
               for(let j=1;j<=i;i++){
                    <p>Hello</p>
               } 
                <></>
            }} */}
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <div style={{backgroundColor:bg, height: '200px',width: '200px'}}> </div>
           <button onClick={bgChange} style={{backgroundColor:bg}}>{name}</button> 
        </>
    )
}

export default RectAngle;