import React from 'react';
import Card from './Card';
import data from "./Data";
import '../project1.css'

function Netflix() {
    const Cards=data.map(user=>
        <Card contact={{
            key:user.id,
            img:user.img,
            title:user.title,
            name:user.name,
            links:user.links
        }}/>
    )
    return(
        <>
            <p className="heading_style">List of top series in Netflix in 2020</p>
            {Cards}
        </> 
    )
}
export default Netflix