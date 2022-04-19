import React, { useState } from 'react';
import SearchResults from './SearchResults';

const Search = () => {
    const[img,setImg]= useState('');
    
    const inputEvent=(event)=>{
        const data=event.target.value;
        // console.log(data);
        setImg(data);
    }
    return (
        <div className="searchbar">
            <input type="text" placeholder="Seacrh Anything" onChange={inputEvent}
                value={img} />
            {img===""? null : <SearchResults name={img}/>}
        </div>
    )
}

export default Search;