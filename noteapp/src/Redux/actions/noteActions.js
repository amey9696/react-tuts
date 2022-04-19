import Actiontype from "../Actiontype";

export default {
    addNote: (note)=> ({
      type: Actiontype.ADD_NOTE,
      note
    }),
    updateNote: (index, note) => ({
      type: Actiontype.UPDATE_NOTE,
      index,
      note,
    }),
    deleteNote: (index) => ({
      type: Actiontype.DELETE_NOTE,
      index
    })
  }