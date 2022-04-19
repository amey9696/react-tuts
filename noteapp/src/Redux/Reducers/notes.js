import Actiontype from "../Actiontype";

const initialState = {
    notes: []
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case Actiontype.ADD_NOTE: {
        const notes = [...state.notes];
        notes.push(action.note);
        return {
          notes,
        }
      }
      case Actiontype.UPDATE_NOTE: {
        const { index, note } = action;
        const notes = [...state.notes];
        notes[index] = note;
        return {
          notes,
        }
      }
      case Actiontype.DELETE_NOTE: {
        const { index } = action;
        const notes = [];
        state.notes.forEach((note, i) => {
          if(index !== i) {
            notes.push(note)
          }
        })      
        return {
          notes,
        }
      }
      default:
        return state;
    }
  }