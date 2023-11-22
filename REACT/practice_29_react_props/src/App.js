import logo from './logo.svg';
import React from 'react';
import './App.css';
import SimpleParagraph from './components/SimpleParagraph';


function App() {

  const paragraphStyle={
    textColor: 'red',
    fontSize: '24px'
  }

  const paragraphClickHandler = () => {
    console.log('Handler on paragraph');
  }

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>
      <SimpleParagraph
      text="Simple Paragraph!"
      styles={paragraphStyle}
      onClick={paragraphClickHandler}
      />
      <LoginForm />
    </div>
  );
}

 /*
 6. Реализуем еще один компонент, `LoginForm`. Он должен рендерить нам несложную форму входа. Она содержит логин, пароль, и кнопку "Вход".
 */
function LoginForm() {
  return (
    <div>
      <input placeholder='Login'/>
      <input placeholder='Password' type="password"/>
      <button>Enter</button>
    </div>
  );
}

export default App;
