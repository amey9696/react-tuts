import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './NoteStyle.css';
import InputActions from '../Redux/actions/InputActions';
import NoteItem from './NoteItem';

const NoteSection = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes)
  
    const onItemClicked = (item, index) => {
      dispatch(InputActions.setInputId(index));
      dispatch(InputActions.setInputTitle(item.title));
      dispatch(InputActions.setInputContent(item.content));
    }
  
    if(notes.length === 0) {
      return (
        <div className="NotesSection__container__empty">
          <p>There is no note yet. Please add one.</p>
        </div>  
      )
    }
  
    return (
      <div className="NotesSection__container">
        {notes.map((item, index) => {
          if(item) {
            return (
              <NoteItem
                title={item.title}
                content={item.content}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />      
            )
          }
          return null;
        })}
      </div>
    );
  };
  
export default NoteSection;  