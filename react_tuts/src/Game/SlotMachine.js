import React from 'react'
import Slot from './Slot';

const SlotMachine = () => {
    return (
        <>
           <h1 className="heading_style">🎰 Welcome to <span style={{fontWeight:'bold'}}> Slot machine game</span> 🎰</h1>
            <div className="slotmachine">
                <Slot x='😄' y='😄' z='😄'/>
                <Slot x='😄' y='😄' z='😄'/>
                <Slot x='😄' y='😄' z='🎅'/>
                <Slot x='😄' y='🎅' z='😄'/>
                <Slot x='🎅' y='😄' z='😄'/>
                <Slot x='🎅' y='🎅' z='😄'/>
                <Slot x='🎅' y='🎅' z='🎅'/>
                <Slot x='💏' y='🎅' z='🍎'/>
            </div>
        </>
    )
}

export default SlotMachine;