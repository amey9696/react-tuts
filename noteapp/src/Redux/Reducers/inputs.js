import Actiontype from "../Actiontype";

const initialState = {
    id: -1,
    title: '',
    content: '',
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case Actiontype.SET_INPUT_TITLE: {
        const { title } = action;
        return {
          ...state,
          title,
        }
      }
      case Actiontype.SET_INPUT_CONTENT: {
        const { content } = action;
        return {
          ...state,
          content,
        }
      }
      case Actiontype.SET_INPUT_ID: {
        const { id } = action;
        return {
          ...state,
          id,
        }
      }
      case Actiontype.RESET_INPUT: {
        return initialState;
      }
      default:
        return state;
    }
  }