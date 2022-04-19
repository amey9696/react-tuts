import React from 'react';

const SearchResults = (props) => {
    const img=`https://source.unsplash.com/600x400?${props.name}`;
    return (
        <>
            <div>
                <img src={img} alt="Seach image result"/>
            </div>
        </>
    )
}

export default SearchResults;