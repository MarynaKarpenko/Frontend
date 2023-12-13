import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';
import SimpleComponent from './components/simpleComponent/SimpleComponent.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFoundPage from './components/page/NotFoundPage.js';
import { Link } from 'react-router-dom';
import Greeting from './components/greeting/Greeting.jsx'
import ProductList from './components/productList/ProductList.jsx';


function App() {

  // local state UserName
  const [userName, setUserName] = useState('');
  const [greet, setGreet] = useState(false);

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <div>
        <Link to='/login'></Link>
        <Link to='/products'></Link>
      </div>
 
        <Routes>
          <Route path='/' element={<Greeting/>}></Route>
          <Route path='/login' element={<LoginForm successLoginHandler={setUserName}/>}></Route>
          <Route path='/products' element={<ProductList/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>

      <SimpleComponent/>
    </div>
  );
}

export default App;
