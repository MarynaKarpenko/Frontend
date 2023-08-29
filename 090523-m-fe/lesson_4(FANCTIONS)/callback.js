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