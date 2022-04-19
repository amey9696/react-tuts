import React, { useState } from 'react';
// import './style.css';
import { questions } from './Api';
import MyAccordian from './MyAccordian';

const Accordian = () => {
    const [data, setData]=useState(questions);
    return (
        <>
            <section className="main-div">
                <h1>React Interview</h1>
                {data.map((curElem)=>{
                    const {id}=curElem;
                    {/* console.log(curElem) */}
                    {/* console.log(id) */}
                    return <MyAccordian key={id} {...curElem}/>;
                })}
            </section>
        </>
    )
}

export default Accordian;