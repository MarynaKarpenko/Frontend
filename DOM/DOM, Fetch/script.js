// let a = 10

// setTimeout(() => {
//     a = 30
//     console.log(a);
// }, 3000)

// console.log(a);


// const promise = new Promise((res) => {
//     setTimeout(() => {
//         res(a = 30)
//     }, 3000)
// })
// .then(() => console.log(a))
// console.log(a);

// const multA = a => a * 2
// console.log(a);



// Виды fetch-запросов:

// GET - получить данные
// POST - добавить данные
// PATCH - частично изменить существующие данные
// PUT - полностью изменить существующие данные 
// DELETE - удалить данные


// 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/users
// Получить данные по запросу (GET-запрос) и вывести в консоль полученные данные

fetch('https://jsonplaceholder.typicode.com/users') // отправили запрос
  .then(res => res.json()) // получили ответ и преобразовали в JSON
  .then(json => renderCards(json)) // полученные по запросу данные в формате JSON вывели в консоль

// function getFetchUsers() {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }
// getFetchUsers()

// function getFetchUsers2() {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     fetch(url)
//         .then(res => res.text())
//         .then(data => console.log(data))
// }
// getFetchUsers2()


// 2. Написать функцию renderCards(), которая принимает в качестве аргумента массив с объектами и 
// для каждого объекта в массиве отрисовывает карточку пользователя (name, username) в диве с классом users_container
const users_container = document.querySelector('.users_container')
const renderCards = arr => {
    arr.forEach(element => {
        const cardElement = document.createElement('div')
        const nameElement = document.createElement('p')
        const usernameElement = document.createElement('p')
        const a_mail = document.createElement('a')
        const crossElem = document.createElement('p')

        cardElement.className = 'cardElement'
        crossElem.classList.add('cross_icon')
        cardElement.style.backgroundColor = element.name[0] === 'C' ? 'lightpink' : 'lightgreen'

        crossElem.innerText = `X`
        nameElement.innerText = `Name: ${element.name}`
        usernameElement.innerText = `Username: ${element.username}`
        a_mail.innerText = element.email

        a_mail.href = `mailto:${element.email}`

        crossElem.addEventListener('click', () => {
            users_container.innerText = ''
            const new_arr = arr.filter(el => el.id !== element.id)
            renderCards(new_arr)
        })

        cardElement.addEventListener('click', function(){
            cardElement.style.backgroundColor = cardElement.style.backgroundColor === 'purple' ?
            'white' : 'purple';
            cardElement.style.color = cardElement.style.color === 'white' ? 'black' : 'white';
            a_mail.style.color = a_mail.style.color === 'white' ? 'blue' : 'white';

        })

        cardElement.append(crossElem, nameElement, usernameElement, a_mail)
        users_container.append(cardElement)
    })
}

// 3. Для каждой карточки вывести кликабельную почту. При клике на почту должно открывать приложение по работе 
// с почтой (тег a, href + mailto)

// 4. Стилизовать карточки (border, padding, border-radius). Если имя человека начинается с буквы C, 
// то покрасить цвет заднего фона в светло-розовый. Всех остальных покрасить в светло-зеленый.
// 5. Стилизовать контейнер - сделать грид 4 колонки

// 6. Каждой карточке добавить крестик в правый верхний угол, при клике на который происходит удаление карточки

// 7. При клике на карточку менять цвет заднего фона на фиолетовый, а цвет текста на белый

