import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'; //useSelector means redux useContext()
import {incNumber,decNumber,multNumber,divNumber} from './Actions/Action';

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const multdivTheNumber = useSelector(state => state.multdivTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div class="container">
  
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>
        
          <div class="quantity">
            <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber(5))}><span>-</span></a>
            <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
            <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
          </div>

        </div>

        <div class="container my-5">
  
          <h1>Multiplication/Division counter</h1>
          <h4>using React and Redux</h4>
        
          <div class="quantity">
            <a class="quantity__minus" title="Multiplication" onClick={() => dispatch(multNumber(5))}><span>*</span></a>
            <input name="quantity" type="text" class="quantity__input" value={multdivTheNumber} />
            <a class="quantity__plus" title="Division" onClick={() => dispatch(divNumber(5))}><span>/</span></a>
          </div>

        </div>

      </div>
    </>
  )
}

export default App