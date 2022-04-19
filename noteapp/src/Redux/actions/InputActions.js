import Actiontype from "../Actiontype";

export default {
    setInputTitle: title => ({
      type: Actiontype.SET_INPUT_TITLE,
      title,
    }),
    setInputContent: content => ({
      type: Actiontype.SET_INPUT_CONTENT,
      content
    }),
    setInputId: id => ({
      type: Actiontype.SET_INPUT_ID,
      id,
    }),
    resetInputs: () => ({
      type: Actiontype.RESET_INPUT,
    })
  }