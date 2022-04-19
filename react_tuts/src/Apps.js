import React from 'react';
import ReactDOM from 'react-dom';

//Hello world:-
//1. using react
// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// ); 

// //2. how babel convert it
// ReactDOM.render( React.createElement("h1",
// null, "hello world"),
// document.getElementById('root'));

// //3. using pure js
// var h2=document.createElement("h2");
// h2.innerHTML="hello world";
// document.getElementById('root').appendChild(h2);

//render multiple elements
// 1. using <div></div> on main palet
// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>This is simple program</p>
//   </div>,
//   document.getElementById('root')
// ); 
//open developer tool see how html file look
/* it look like
<div id="root">
  <div>
    our elemenents here
  </div>
</div>
it create extra div element inside main div 
for solving this problem either use array or use React.Fragment
*/

//2. using array 
//in React v16 it's possible for render() to return an array of elements.
// ReactDOM.render(
//   [
//     <h1>Hello World</h1>,
//     <p>This is simple program</p>
//   ],
//   document.getElementById('root')
// ); 

//REACT FRAGMENT
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello World</h1>
//     <p>This is simple program</p>
//   </React.Fragment>,
//   document.getElementById('root')
// );

//syntactical sugar form for Fragments
// ReactDOM.render(
//   <>
//     <h1>Hello World</h1>
//     <p>This is simple program</p>
//   </>,
//   document.getElementById('root')
// );

//challenge one- display 5 programming lang
ReactDOM.render(
  <>
    <h1>List of top 5 programming language:=</h1>
    <ol>
      <li>C</li>
      <li>C++</li>
      <li>Java</li>
      <li>python</li>
      <li>PHP</li>
    </ol>
  </>,
  document.getElementById('root')
);



//Paste this all code in index.js file