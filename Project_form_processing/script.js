// Обработка форм

// В консоле вывести введенные пользователем емейл и пароль после отправки формы
const form = document.querySelector("form")
const email = document.querySelector(".email")
const pass = document.querySelector(".password")

form.addEventListener("submit", function(event) {
    event.preventDefault() // отменяет действие по умолчанию
    console.log(email.value)
    console.log(password.value)
    const userData = {
        email: email.value,
        password: pass.value
    }
})

/*
    При отправке формы происходит действия по умолчанию - перезагрузка страницы, измнеение url
    Чаще всего мы это действие по умолчанию отменяем - event.preventDefault()

    event - это объект события, которое создается всегда по умолчанию при происшествии какого-то события
        в браузере. его всегда можно получить в коллбек-функции, которую передаем в addEventListeneer

    addEventListener(type, cbFunc)
    type - "click"
    type - submit

    value - это свойство input, внутри которого хранятся данные введенные в него

    1. click по кнопке submit - не обязательно отправляет форму (не заполнены поля, неправильно заполнены)
    2. отправка формы (submit) - происходит только при успешном вводе всех данных и успешной отправки формы
*/