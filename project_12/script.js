// alert("hello") // allert - это уведомление в браузере
// console.log("hello") // для поиска ошибок, для отображения информ

// const name = prompt("Как тебя зовут?") //функция для ввода информ
// console.log(name)

// const userAge = 40
// const userLogin = "Starte Institute"
// console.log(userAge) // значение переменной userAge
// console.log("userAge") // строка "userAge"

// const productName = "Milk"
// console.log(productName)

// const userName = "Maryna"
// console.log(userName)

// const roductPrice = 10000
// console.log(roductPrice)

// const productName = "Milk"
// const userName = "Maryna"
// const roductPrice = 10000
// console.log(productName, userName, roductPrice)

// let price = 2000
// const price1 = 3000

// price = 5000
// price1 = 7000
// console.log(price)
// console.log(price1)

// Задача. Запросить 2 числа у пользователя и запросить их в консоле отоьразить их сумму
// const number = +prompt("Введите первое число") // запросили 1 часло и сохранили в переменную number
// const number1 = +prompt("Введите второе число") // запросили 2 часло и сохранили в переменную number1
// // console.log(number + number1) //отображаем пользователю сумму 2 чисел
// const sum = number + number1
// console.log(sum)
/* конкатинация - склеивание строк
promt - всегда возвращает строку, чтобы получить число нужно поставить "+" перед promt() */

// Задача. Запросить у пользователя 1 часло. А в консоле вывести квадрат этого числа.
// const number = +prompt("Введите число")
// const square = number * number // квадрат числа
// console.log(square)
// console.log(number ** 2) //number ** 3, number ** 4
// console.log(Math.pow(number, 2)) // Math.pow(число, степень)

// Задача. Запросить у пользователя имя, в консоле вывести. "Привет", "введенное имя"
// const name = prompt("Введите ваше имя")
// console.log("Hello, " + name) // конкатинация / concatenation
// console.log(`Hello, ${name}`) // интерпаляция / interpolation 

// Задача. Запросить у польз имя и возраст. Вывести - "Вам введенный возраст"
// const name = prompt("Введите ваше имя")
// const age = +prompt("Введите ваш возраст")
// console.log("Hello, " + name + ". " + "Вам " + age + " лет")
// console.log(`Hello, ${name}. Вам ${age} лет`)

// Задача. Есть 3 пер. r, g, b. В консоль вывести  строку
const r = 15
const g = 51
const b = 120
console.log(`rgb(${r}, ${g}, ${b})`)

/* Когда мы знаем, что значение переменной будет меняться, то используем знамение let
    В остальных случаях используем const - константа - постоянная переменная
*/

/* = это оператор писваивания, присваиваем значение пересенной, храним в переменной значение */

/*
+ - сумма
- - разница
* - произведение
/ - дедение
** - возведение в степень
*/

/* 
    1. строка - "Arsen", "Hello", "My title", "2023", "500"
    2. число - 100, 500, 2023, 700, 1000, 10.5, 3.14
*/

/*
    Задачи
    1. Создать переменные для хранения назв прод, имени польз, цены прод
    2. Отобр каждую в консоли
*/

/*
    Переменная - это контейнер для данных
    Для создания переменной есть два ключ слова - let, const

    Правала наименования переменных:
        1. назв должно быть написано на латинеце - name, age, text, title
        2. в переменной могут использоваться цифры, только не в начале - 
            name1 - правильно
            1name - неправильно
        3. переменная дрлжна быть осмысленной
            Если переменная хранит имя - name
            Усли возраст - age
        4. cameCase - первая буква первого слова начинается с маленькой буквы, остальные слова с большой
            переменная хранит цену продукта - productPrice
            переменная хранит цену продукта со скидкой - productPriceWithSale

            snake_case - каждое последуещее слово написано через нижний слеш "_"
*/

// 1. Ввксти в prompt имя пользователя
// 2. Введенное имя отобразить в consol

// это однострочный комент
/* 
многострочный комент
    ctrl + / - Это закоментировать строку
 */