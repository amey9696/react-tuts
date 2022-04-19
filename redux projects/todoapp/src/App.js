import './App.css';
import {useSelector} from 'react-redux';
import TodoList from './Components/TodoList';

function App() {
  const state=useSelector((state)=>({...state}));
  console.log("state",state);
  return (
    <>
      <TodoList/>
    </>
  );
}

export default App;