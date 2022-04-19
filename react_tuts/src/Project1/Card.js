import React from 'react';

function Card(props) {
    return (
        <>
           <div className="cards">
                <div className="card">
                    <img src={props.contact.img} alt="movie pic" className="card_img"/>
                    <div className="card_info">
                        <span className="card_category">{props.contact.title}</span>
                        <h3 className="card_title">{props.contact.name}</h3>
                        <a href={props.contact.links} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>   
        </>
    )
}
export default Card;