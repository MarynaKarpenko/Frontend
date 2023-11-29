import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import SimpleParagraph from './components/simpleParagraph'


function App() {

  const countClickHandler = () => {
    setClickCount(clickCount + 1)
  }

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>
      <button onClick={countClickHandler}>Increment</button>
      <SimpleParagraph text={`Clicked ${clickCount} times!`}/>

    </div>
  );
}

export default App;
