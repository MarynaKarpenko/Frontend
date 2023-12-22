import { Link, Route, Routes } from 'react-router-dom'
import s from './Modal.module.css'
import Button from '../Button'

export default function Modal({active, setActive}){
    return(
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modal_content} ${active && s.active}`}>
                <button onClick={()=> setActive(false)}>X</button>
                <Routes>
                    <Route path='/login' element={
                        <div>
                            <h2>Авторизация</h2>
                            <Button text='Авторизироваться' color={'yellow'}></Button>
                            <Link to={'/registration'}>
                                <Button text='Регистрация' color={'white'}></Button>
                            </Link>
                        </div>
                    }></Route>
                    <Route path='/registration' element={
                        <div>
                            <h2>Регистрация</h2>
                            <Button text='Зарегистрироваться' color={'yellow'}></Button>
                            <Link to={'/login'}>
                                <Button text='Авторизация' color={'white'}></Button>
                            </Link>
                        </div>
                    }></Route>
                </Routes>
            </div>
        </div>
    )
}