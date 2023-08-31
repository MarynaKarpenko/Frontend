// CallBack

// Функция, которая передается в качестве агрумента другой функции
// Callback нужен для того, чтобы функция стала более гибче, передавая в качестве аргумента функцию

function handler(Callback) {
    let a = Callback('tigran')
    return a
}
console.log(handler((c) => c[0] === 'n')); // false


function handler(Callback) {
    let a = Callback(5)
    return a
}
console.log(handler((c) => c * 10)); // 50

// function math(Callback) {
//     let a = Callback(10)
//     return a
// }
// console.log(math((num) => num ** 2));
// console.log(math((num) => num + 10));
// console.log(math((num) => num / 5));


// ---------------------------------------
// Пример

// function math(a,b,sign) {
//     if (sign === '+') {
//         return a + b
//     } else if (sign === '-') {
//         return a - b
//     } else if (sign === '/') {
//         return a / b
//     } else if(sign === '*') {
//         return a * b
//     }
// }
// console.log(math(5,10, '+'));
// console.log(math(5,10, '*'));

function math(callback) {
    return callback(5)
}
console.log(math(() => (3 * 3 / 4) ** 2));


// ---------------------------------------
// Задача
// Повторить метод фильтр. написать функцию, которая будет 
// let a = [1,2,3,4,5,6,7,8]

// function filter2(array, callback) {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }

// console.log((a.filter(elem => elem >= 5)));
// console.log(filter2(a, elem => elem >= 5));


// --------------------------------------------------
// Напишите функцию checkElem(array, callback)
// Функция должна проверить, сущесвтует ли хотябы 1 элемент в массиве array по условию, который будет передаваться в колбеке
// Если хотябы 1 элемент удовлетворяет условию, функция должна вернуть true, если нет - false
let a = [1,2,3,4,5,6,7,8,9]
function checkElem(array, callback) {
    for (let elem of array) {
        if (callback(elem)) {
            return true
        }
    }
    return false
}
console.log(checkElem(a, elem => elem > 10));



// ---------------------------------------------------------------
// Напишите функцию checkEvereElem(array, callback)
// Функция должна проверить, удовлетворяют ли все эелементы указанному условию колбека. 
// Если это так - функция должна вернуть true, 
// если хотябы 1 элемент не удовлетворяет условию колбека - функция должна вернуть false
let b = [1,2,3,4,5,6,7,8,9]
function checkEveryElem(array, callback) {
    for (let elem of array) {
        if (!callback(elem)) {
            return false
        }
    }
    return true
}
console.log(checkEveryElem(b, elem => elem > 5));

// -----------------------------------------------------------
// Напишите функцию changeEveryElem(array, callback).
// Функция должна изменить каждый элемент массива на значение, которые будет указано в результате работы callback
// callback должен получать в качестве аргументе значение элемента массива
// Примечание: функция должн вернуть новый массив

// changeEveryElem([1,2,3,4], elem => elem * 2)
// => 
// [2,3,6,8]

function changeEveryElem(array, callback) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]))
    }
    return newArr
}
console.log(changeEveryElem([1,2,3,4], elem => elem * 2));

// -------------------------------------------------------
// Напишите функцию changeString(string, callback), которая будет получать в качестве аргумента строку
// callback должен возвращать массив данных с буквами, которые необходимо исключить в строке string.
// функция должна вернуть новую строку, без указанных в массиве символов

// changeString('somestring', () => ['s','m','g'])
// => 
// 'oetrin'

// 1 вариант
// const changeString = string => string.replace(/[smg]/g, '');
// console.log(changeString('somestring', () => []));

// 2 вариант
function changeString(string, callback) {
    let newStr = ''
    let arrayFormCallback = callback()
    for (let elem of string) {
        if (!arrayFormCallback.includes(elem)) {
            newStr += elem
        }
    }
    return newStr
}
console.log(changeString('somestring', () => ['s','m','g']));