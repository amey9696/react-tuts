const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    // if(action.type=="INCREMENT"){
    //     return state+1;
    // }
    // else if(action.type=="DECREMENT"){
    //     return state-1;
    // }
    // else{
    //     return state;
    // }
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}
    
export default changeTheNumber;