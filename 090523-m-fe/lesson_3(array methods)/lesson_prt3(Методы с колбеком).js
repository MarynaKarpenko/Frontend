// Методы с колбеком

// setTimeout(() => {
//     console.log('Hello!');
// }, 1000)


// filter()
// метод фильтрует массив по указанному в колбеке условию
// возвращает новый массив

// let array = [1,2,3,4,5,6,7]
// let result = array.filter((elem) => elem > 5) //[ 6, 7 ]
// console.log(result);

// Отфильтруйте массив таким образом, чтобы в новом масиве остались только четные элементы
// let result2 = array.filter((elem) => elem %2 === 0) //[ 2, 4, 6 ]
// console.log(result2);

// Отфильтруйте массив таким образом, чтобы в новом масиве остались только НЕ четные элементы
// let result3 = array.filter((elem) => elem %2 !== 0) // [ 1, 3, 5, 7 ]

// console.log(result3);

// Отфильтруйте массив таким образом, чтобы в новом масиве остались только элементы, 
// у которых вычисляется квадратный корень
// let array = [1,2,3,4,5,6,7,8,9]
// let result = array.filter((elem) => (elem ** 0.5) % 1 === 0)
// console.log(result);

// let array2 = [1,2,3,4,5,6,7,8,9]
// let result2 = array.filter((elem) => Math.sqrt(elem) % 1 === 0)
// console.log(result2);

// let array3 = [1,2,3,4,5,6,7,8,9]
// let result3 = array.filter((elem) => Number.isInteger(Math.sqrt(elem)))
// console.log(result3);

// console.log(2 ** 2); // ** - возведение в степень
// console.log(4 ** 0.5);

// console.log(Number.isInteger(1)); // ** - проверяет целое ли число, или нет

let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// Отфильтруйте массив, оставив только товары, которые начинаются на букву 'В'
let result = goods.filter((elem) => elem[0] === 'В')
console.log(result);

let result2 = goods.filter((elem) => elem.startsWith === 'В')
console.log(result2);

let result3 = goods.filter((elem) => elem.charAt(0) === 'В')
console.log(result3);