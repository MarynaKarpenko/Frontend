import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Button from './components/Button';
import {Link} from 'react-router-dom'

export default function App() {

  const [active, setActive] = useState(false)

  return (
    <div>
      <Link to={'/login'}>
        <Button id='btn1' onClick={() => setActive(true)} text={'Авторизация / Регистрация'} color={'yellow'}/>
      </Link>
      
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}
