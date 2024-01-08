import { Link, Route, Routes } from 'react-router-dom'
import s from './Modal.module.css'
import Button from '../Button'
import FormElem from '../FormElem'


export default function Modal({active, setActive}){
    return(
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modal_content} ${active && s.active}`}>
                <button onClick={()=> setActive(false)}>X</button>
                <Routes>
                    <Route path='/login' element={
                        <FormElem
                            title='Авторизироваться'
                            link='/registration'
                            button={{submit: 'Авторизироваться', redirect: 'Регистрация'}}
                            type='login'
                            input={{email: 'Почта', password: 'Пароль'}}
                            infoText={'Укажите почту зарегистрированного аккаунта. Ссылка на сброс пароля придет на указанную почту и будет доступна 24 часа'}
                        />
                    }/>
                    <Route path='/registration' element={
                        <FormElem
                            title='Регистрация'
                            link='/login'
                            button={{submit: 'Зарегистрироваться', redirect: 'Авторизация'}}
                            type='reg'
                            input={{email: 'Почта', password: 'Пароль', secondPassword: 'Повторить пароль'}}
                            infoText={'Регистрируясь на сайте, вы соглашетесь с нашими правилами и политикой конфиденциальности'}
                        />
                    }/>
                    <Route path='/reset' element={
                        <FormElem
                            title='Вспомнить пароль'
                            link='/login'
                            button={{submit: 'Сбросить пароль', redirect: 'Авторизация'}}
                            type='reset'
                            input={{email: 'Почта'}}
                            infoText={'Введите логин и пароль вашего аккаунта'}
                        />
                    }/>
                </Routes>
            </div>
        </div>
    )
}