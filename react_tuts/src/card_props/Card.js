import React from 'react'
import './style.css';


const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.images} alt="tvf" className="img_kota" />
                <p className="title">{props.title}</p>
                <h1>Total Seasons:{props.seasons}</h1>
                <p className="source">{props.source}</p>
                <a href={props.link} target="__blank">
                    <button>Watch Now</button></a>
            </div>

        </>
    )
}

export default Card
