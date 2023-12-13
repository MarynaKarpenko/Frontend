import React from 'react'
import './App.css';
import { Context } from './Context/Context';


function App() {
  const [string, setString] = useState('Default string')
  const reverseState = () => {
    setString(string.split('').reverse().join(''))
  }
  return (
    <Context.Provider value={{string}}>
      <div>
        App
        <Main/>
      </div>
    </Context.Provider>
  );
}

export default App;
