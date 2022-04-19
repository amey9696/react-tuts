import React, { useState } from 'react'
import Menu from './Menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

//remove duplicate category from array
const allCatValues = [...new Set(Menu.map((curEleme) => curEleme.category)), "all food"];
// console.log(allCatValues);

const Gallery = () => {
    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems]=useState(allCatValues);

    const filterItem = (category) => {

        if(category==="all food"){
            setItems(Menu);
            return;
        }

        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your favourite Dish</h1>
            <hr />
            <CatMenu filterItem={filterItem} catItems={catItems}/>
            <MenuItems items={items} /> {/* props */}
        </>
    )
}

export default Gallery;