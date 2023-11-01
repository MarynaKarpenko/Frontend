// Разновидности функций

// ---------------------
// Function decoration


// function double(num) {
//     return num ** 2
// }


// ---------------------
// Function expression

// - стрелочная функция
// 1-й режим работы
let double1 = (num) => num ** 2
console.log(double1(5));

let double3 = (num) => ({num})
console.log(double3(5));

// 2-й режим работы
let double2 = (num, str) => {
    return {num, str}
}
console.log(double2(10, 'test'));

// - анонимная (безымянная) функция
// let double = function (num) {
//     return num ** 2
// }
// console.log(double(5));


// -------------------------------

// Задача 1

// Function decoration
// Напишите функцию getSqrt(num), которая проверяет, вычисляется ли квадратный корень из аргумента num
// Если корень выичляется - функция должна вернуть TRUE, в противном случае FALSE


function getSqrt(num) {
    if (Math.sqrt(num) % 1 === 0) {
        return true
    } else {
        return false
    }
}
console.log(getSqrt(3)); // false
console.log(getSqrt(9)); // true

function getSqrt(num) {
    return Math.sqrt(num) % 1 === 0
}
console.log(getSqrt(3)); // false
console.log(getSqrt(9)); // true

// -------------
// Задание 2
// Напишите эту же функцию используя подход анонимной и стрелочной функции

function getSqrt(num) {
    return Math.sqrt(num) % 1 === 0
}
console.log(getSqrt(3)); // false
console.log(getSqrt(9)); // true

let getSqrt = (num) => Math.sqrt(num) % 1 === 0
console.log(getSqrt(3)); // false
console.log(getSqrt(9)); // true


// ----------------------------------
// Задача 3
// Напишите функцию firstLastChar(string), которая получает в качестве аргумента строку
// функцию должна вернуть значение первой и последней буквы
// 'test'
// =>
// 'tt'
// Напишите функцию используя подход стрелочной функции

let firstLastChar = (string) => string[0] + string[string.length - 1]
console.log(firstLastChar('test'));


// -----------------------------
// Задача 4

// Напишите функцию getNewElem(elem), которая должна добавить в массив array новый элемент elem (в конце)
// Если такойже элемент в массиве существует, тогда его добавлять не нужно

let array = [1,2,3,4,5,6]

let getNewElem = (elem) => {
    if (!array.includes(elem)) {
        array.push(elem)
    } 
    return array
}
console.log(getNewElem(9)); 