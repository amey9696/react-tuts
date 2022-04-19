import React, { useReducer } from 'react'

//reducer is pure function..the pure function does not produce any side effect
const reducer=(curState, action)=>{
    // console.log(curState, action);
    if(action.type==="INCREMENT"){
        return curState+1;
    }
    else if(action.type==="DECREMENT"){
        return curState-1;
    }
    else{
        return curState;
    }
}

const initialState=0;

const UseReducer = () => {

    const [curState, dispatch]= useReducer(reducer,initialState); //it is syntax
    return (
        <>
           <h1>{curState}</h1> 
           <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
           <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        </>
    )
}

export default UseReducer;

//we call dispatch() in our code when we want to change state. We already  
//have a reducer set up to do the legwork of changing the state, we jsut needs
//to be able to trigger how to change it.
//dispatch triggered the action methods ..here action methods are INCREMENT and DECREMENT

//Using UseState
// import React, { useState } from 'react'
// const UseReducer = () => {
//     const [count,setCount]=useState(0);
//     return (
//         <>
//            <h1>{count}</h1> 
//            <button onClick={()=>setCount(count+1)}>Increment</button>
//            <button onClick={()=>setCount(count-1)}>Decrement</button>
//         </>
//     )
// }

// export default UseReducer;
