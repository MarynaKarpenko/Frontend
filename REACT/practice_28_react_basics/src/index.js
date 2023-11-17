import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function App(){
  return(
    <div className='App'>
      <p>Hello World from React! {new Date().toLocaleString()}</p>
    </div>
  );
}
export default App;