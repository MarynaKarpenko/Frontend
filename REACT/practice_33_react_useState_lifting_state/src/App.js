import logo from './logo.svg';
import React, {useState} from 'react';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph.jsx';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';
import Greeting from './components/greeting/greeting.jsx';


function App() {

  const [username, setUsername] = useState('')

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <LoginForm setName={setUsername}/>
      <Greeting name={username}/>
    </div>
  );
}

export default App;
