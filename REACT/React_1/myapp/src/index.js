import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

function App(){
  return (
    <div>
    <h1>Hello world</h1>
    <Button/>
  </div>
  )
}

function Button(){
  return(
    <button>
      Some Button!
    </button>
  )
}


