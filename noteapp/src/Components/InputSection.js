import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteAction from '../Redux/actions/noteActions';
import InputActions from '../Redux/actions/InputActions';
import './InputStyle.css';

const InputSection = () => {
    const id = useSelector(state => state.inputs.id);
    const title = useSelector(state => state.inputs.title);
    const content = useSelector(state => state.inputs.content);
    const dispatch = useDispatch();
  
    const addNote = () => {
      if(title && content) {
        dispatch(noteAction.addNote({
          title,
          content
        }))
        dispatch(InputActions.resetInputs())
      }
    }
  
    const updateNote = () => {
      if(title && content) {
        dispatch(noteAction.updateNote(id, {
          title, content
        }))
        dispatch(InputActions.resetInputs())
      }    
    }
  
    const deleteNote = () => {
      dispatch(noteAction.deleteNote(id))
      dispatch(InputActions.resetInputs())
    }
  
    return (
      <div className="InputSection__container">
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={e => 
            dispatch(InputActions.setInputTitle(e.target.value))
          }
        />
        <textarea
          placeholder="Note content"
          value={content}
          onChange={e => 
            dispatch(InputActions.setInputContent(e.target.value))
          }
        ></textarea>
        <div
          className="InputSection__container__btnWrapper"
        >
          <button
            onClick={id === -1 ? addNote : updateNote}
          >
            {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
          </button>      
          {id !== -1 &&
            <button
              onClick={deleteNote}
              style={{ marginLeft: '1em', backgroundColor: 'red' }}
            >
              DELETE NOTE
            </button>
          }
        </div>
      </div>
    );
  };
    
export default InputSection;