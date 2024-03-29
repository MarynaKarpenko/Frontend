// Здесь может быть Ваша реклама!
// Но вместо этого мы разместим наш код!

/* 1. Ставим обработчик на событие загрузки документа (`DOMContentLoaded`). 
Нужно вывести в консоль текущее время (форматированное по умолчанию). 
Чтобы получить строку с текущим временем, используем `new Date()`. */

document.addEventListener('DOMContentLoaded', (e) => {
    console.log((new Date()));
})

/* 5. Работаем с текстовым полем `input#testInput`. Наша задача - протоколировать нажатие 
каждой кнопки (выводить в консоль ее код).
 - нужен обработчик события нажатия кнопки на инпут. Событие - `keypress`
 - в объекте события, есть свойство `charCode` - это код нажатой кнопки. 
 Его нужно вывести в консоль.*/
const testInput = document.querySelector('#testInput')
testInput.addEventListener('keypress', (event) => {
    console.log(event, event.charCode);
})

/* 6. Пишем свою функцию валидации для инпута, назовем ее `validateInput`. 
Предположим, мы вводим количество единиц товара, и у нас разрешенные символы - только цифры. 
Наша задача - запретить ввод в текстовое поле не-цифровых символов.
 - нужен обработчик на `keypress` текстового поля - это будет наша функция `validateInput`
 - при обрабокте события, проверяем `event.charCode`.
 - коды клавиш-цифр - от 48 до 57.
 - здесь нам нужно ПРЕДОТВРАТИТЬ стандартное поведение (т.е. изменение текста инпута). */

function validateInput(event) {
    if(event.charCode < 48 || event.charCode > 57) {
        event.preventDefault()
    }
}
// testInput.addEventListener('keypress', validateInput)

const testButton = document.querySelector('#firstButton')
testButton.addEventListener('click', (event) => {
    console.log(event);
    console.log('Hi from the button!');
})
testButton.addEventListener('mouseover', (event) => {
    console.log(event);
})

testInput.addEventListener('blur', (event) => {
    testInput.style.backgroundColor = 'green'
})
testInput.addEventListener('focus', (event) => {
    testInput.style.backgroundColor = ''
})