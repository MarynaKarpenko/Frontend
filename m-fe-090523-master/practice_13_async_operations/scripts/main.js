// Здесь пока ничего нет.
// 1. Работаем с отложенным выполнением кода. Нужно вывести в консоль сообщение 
// "Delayed message", через 5 секунд после запуска скрипта.
setTimeout(() => {
    console.log('Delayed message');
}, 5000)

/* 2. Делаем блок на странице, который будет запускать отложенное выполнение. 
Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". 
При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". 
N - это кол-во секунд, введенное в инпуте. */

const div_root = document.querySelector('#root')
const div_container = document.createElement('div')
div_container.className = 'container'
div_root.append(div_container)
const timeInputt = document.createElement('input')
timeInputt.className = 'newInput'
timeInputt.placeholder = 'Введите задержку в секундах'
const timeButton = document.createElement('button')
const btn_cancel = document.createElement('button')
timeButton.innerText = 'Запуск'
btn_cancel.innerText = 'Отмена'
div_container.append(timeInputt, timeButton, btn_cancel)

btn_cancel.style.display = 'none'


timeButton.addEventListener('click', (event) => {
    setTimeout(() => {
        console.log('Delayed message');
        btn_cancel.style.display = 'none'
    }, timeInputt.value * 1000)
    btn_cancel.style.display = 'block'
})
btn_cancel.addEventListener('click', (event) => {
    clearTimeout(timerId)
    btn_cancel.style.display = 'none'
})

/* 3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта 
(рекомендуется воспользоваться CSS).
 - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
 - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
 - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку 
 "Отмена" скрываем. */

 const timerId = setTimeout(() => {
    console.log('Hello, from timeout');
 }, 2000)
 clearTimeout(timerId)


 /* 8. Работаем с промисами. Задача - написать промис, который через 5 секунд будет успешно завершен текстом 
 "Successfully finished!". Этот текст нужно вывести в консоль. */
let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Successfully finished!')
        }, 5000)
    })
promise.then((a) => {
            console.log(a);
        }).catch((a) => {
            console.log(a);
        })