const initialState = 5;

const multdivTheNumber = (state = initialState, action) => {
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
        case "MULTIPLICATION": return state * action.payload;
        case "DIVISION": return state / action.payload;
        default: return state;
    }
}
    
export default multdivTheNumber;