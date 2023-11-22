import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App(){
  return(
    <div className='test'>
    <h1 name='123' id='elem1'>Hello world</h1>
    <Button id='10'/>
    </div>
  )
}

function Button(){
  return(
    <>
    <button>Some Button!</button>
    <div>123</div>
    </>
  )
}
