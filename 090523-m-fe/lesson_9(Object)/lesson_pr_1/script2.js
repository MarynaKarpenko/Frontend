// Object и его методы

// Первый вариант
// let obj = new Object({name: 'alex'})

// Второй вариант
// let obj = {name: 'alex'}

//_____________________________________--
// Переобразование объекта в МАССИВ
// let obj = {
//     name: 'Alex',
//     age: 30,
//     isJob: true,
// }
// console.log(Object.values(obj))     (только значение ключей) [ 'Alex', 50, true ]
// console.log(Object.keys(obj))       (только ключи)           [ 'name', 'age', 'isJob' ]
// console.log(Object.entries(obj))    (и ключи и значения)     [ [ 'name', 'Alex' ], [ 'age', 50 ], [ 'isJob', true ] ]


// -------------------------------
// Задача 
// Задан объект numbers посчитайте сумму всех свойств

let numbers = {
    price1: 1000,
    price2: 699,
    price3: 400,
    price4: 700,
    price5: 400,
    price6: 600,
    price7: 300,
}
let arr = Object.values(numbers)
console.log(arr.reduce((accum, elem) => accum + elem, 0));