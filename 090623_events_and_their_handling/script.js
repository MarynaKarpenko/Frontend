// События и их обработка


/*
    addEventListener - метод, который позволяет вызвать функцию по происшествии какого-либо события

    addEventListener(type, cb) - принимает два аргумента
    type - тип события - click, scroll, submit, change, input
    cb - callback function - функция обратного вызова, функцию вызываем не мы, а какая-то другая функция
*/


// function sum() {
//     console.log("ваша сумма Х");
// }
// sum() // immediately invoke function - немедленный вызов функции


// Задача 1. Задача. при клике на кнопку btn, в консоли отобразить "Приветствую!"


// const btn = document.querySelector(".btn")
// btn.addEventListener("click", function () {
//     console.log("Приветствую!");
// }) 


// Задача 2. При нажатии на кпноку btn увеличивать значение в p.text на 1 

/*
    1. Создаем переменную для хранения текущего значения числа
    2. При клике увеличиваем переменную на 1
        2.1. Повесить слушатель события на кнопку
        2.2. Вызывать cb функцию, которая увеличивает переменную на 1
    3. меняем текст в теге p на значение переменной
*/

// Получаем ссылки на элементы
// const button = document.querySelector(".btn")            // первая кнопка
// const buttonMinus = document.querySelector(".btn-minus") // вторая кнопка
// const paragraf = document.querySelector(".text")         // вызов параграфа для вложения в него текста

// let num = 0                  // Создаем переменную для хранения текущего значения числа

// button.addEventListener("click", function () {
//     num = num + 1           // или num++  // Увеличиваем значение переменной на 1 
//     paragraf.innerText = num
// })


// При надатии на кнопку Минус 1 уменьшать на 1

// buttonMinus.addEventListener("click", function () {                   
//     if (num > 0) {
//         num = num - 1          // уменьшение значения переменной на 1
//     }
//     paragraf.innerText = num    // вывод значения 
// })



// Задача 3. При нажатии на кнопку меняет цвет фона фона body на соответствующий

/*
    querySelector("body")

    document.body - обращение к тегу body 

    main = {
        innerText: "Текстовое содержимое",
        innerHTML: "<h1>Текстовое содержимое</h1>",
        style: {
            backgroundColor: ""
        }
    }
    main.style.backgroundColor = "red"
*/


const redButton = document.querySelector(".red-btn")

redButton.addEventListener("click", function () {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#F08080";
    redButton.style.backgroundColor = "red";
    redButton.style.color = "black"
})


const greenButton = document.querySelector(".green-btn")

greenButton.addEventListener("click", function () {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#00FF7F";
    greenButton.style.backgroundColor = "green";
    greenButton.style.color = "black"
})


const blueButton = document.querySelector(".blue-btn")

blueButton.addEventListener("click", function () {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#00CED1";
    blueButton.style.backgroundColor = "blue";
    blueButton.style.color = "black"
})


const yellowButton = document.querySelector(".yellow-btn")

yellowButton.addEventListener("click", function () {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "#FFEFD5";
    yellowButton.style.backgroundColor = "yellow";
    yellowButton.style.color = "black"
})


const imgButton = document.querySelector(".img-btn")

imgButton.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('./IMG/123.avif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    imgButton.style.color = "black"
})



// Обращаться к кнопкам не по отдельно, а ко всем одновременно
//             querySelectorAll()

