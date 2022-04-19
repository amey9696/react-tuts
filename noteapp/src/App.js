import React from 'react';
import store from './Redux/createStore';
import { Provider } from 'react-redux';
import './App.css';
import InputSection from './Components/InputSection';
import NoteSection from './Components/NoteSection';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>My Notes</h1>
        <InputSection/>
        <div className="line"></div>
        <NoteSection/>
      </div>
    </Provider>
  );
}

export default App;