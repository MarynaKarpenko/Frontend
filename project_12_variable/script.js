// Переменная


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


/* конкатинация - склеивание строк
promt - всегда возвращает строку, чтобы получить число нужно поставить "+" перед promt() */


alert("hello")                          // allert - это уведомление в браузере
console.log("hello")                    // для поиска ошибок, для отображения информ


const name = prompt("Как тебя зовут?") //функция для ввода информ
console.log(name)


const userAge = 40
const userLogin = "Starte Institute"
console.log(userAge)                    // значение переменной userAge
console.log("userAge")                  // строка "userAge"


const productName = "Milk"
console.log(productName)

const userName2 = "Maryna"
console.log(userName2)


const roductPrice = 10000
console.log(roductPrice)


const productName3 = "Milk"
const userName3 = "Maryna"
const roductPrice3 = 10000
console.log(productName3, userName3, roductPrice3)


let price = 2000
const price1 = 3000


price4 = 5000
price5 = 7000
console.log(price4)
console.log(price5)


// Задача 1. Запросить 2 числа у пользователя и отобразить их в консоле сумму

const number = +prompt("Введите первое число")       // запросили 1 число и сохранили в переменную number
const number1 = +prompt("Введите второе число")      // запросили 2 число и сохранили в переменную number1
console.log(number + number1)                        //отображаем пользователю сумму 2 чисел

const sum = number + number1
console.log(sum)


// Задача 2. Запросить у пользователя 1 число. А в консоле вывести квадрат этого числа.

const number2 = +prompt("Введите число")
const square = number2 * number2              // квадрат числа
console.log(square)
console.log(number2 ** 2)                     //number ** 3, number ** 4
console.log(Math.pow(number2, 2))              // Math.pow(число, степень)


// Задача 3. Запросить у пользователя имя, в консоле вывести. "Привет", "введенное имя"

const name4 = prompt("Введите ваше имя")
console.log("Hello, " + name4)               // конкатинация / concatenation
console.log(`Hello, ${name4}`)                // интерпаляция / interpolation 


// Задача 4. Запросить у польз имя и возраст. Вывести - "Вам - "введенный возраст""

const name5 = prompt("Введите ваше имя")
const age5 = +prompt("Введите ваш возраст")
console.log("Hello, " + name5 + ". " + "Вам " + age5 + " лет")
console.log(`Hello, ${name5}. Вам ${age5} лет`)


// Задача 5. Есть 3 переменных: r, g, b. В консоль вывести  строку

const r = 15
const g = 51
const b = 120
console.log(`rgb(${r}, ${g}, ${b})`)

/* Когда мы знаем, что значение переменной будет меняться, то используем знамение let
    В остальных случаях используем const - константа - постоянная переменная
*/


// = это оператор присваивания, присваиваем значение переменной, храним в переменной значение


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
    2. Отобр каждую в консоле
*/


// 1. Ввести в prompt имя пользователя
// 2. Введенное имя отобразить в consol


// это однострочный комент


/* 
многострочный комент
    ctrl + / - Это закоментировать строку
 */