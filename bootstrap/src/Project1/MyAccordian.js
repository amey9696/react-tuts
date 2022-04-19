import React, { useState } from 'react'

const MyAccordian = ({question, answer,id}) => {
    const [show, setShow]=useState(false);
    // console.log(key);
    let key=id;
    return (
        <>
            {/* <div className="main-heading">
                <p onClick={()=>setShow(!show)}>{show? "➖" : "➕"}</p>
                <h1>{question}</h1>
            </div>
            { show && <p className="answers">{answer}</p> } */}

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id={"flush-headingOne"+key}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapseOne"+key} aria-expanded="false" aria-controls="flush-collapseOne">
                    {question}
                    </button>
                </h2>
                <div id={"flush-collapseOne"+key} className="accordion-collapse collapse" aria-labelledby={"flush-headingOne"+key} data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{answer}</div>
                </div>
                </div>
            </div>
        </>
    )
}

export default MyAccordian;