// We will work here!

// 1. Получить сумму элементов массива numbers
let numbers = [1,2,3,4,5,6,7,8]
// let result1 = numbers.reduce((acc, elem) => acc + elem, 0)
// console.log(result1);


const strings = ['This', 'is', 'an', 'array', 'of', 'Test', 'strings'];

const ball = {
  name: "Ball",
  category: "Sport",
  img: "./assets/ball.jpeg",
  price: 100
};
const gloves = {
  name: "Gloves",
  category: "Sport",
  img: "./assets/gloves.jpg",
  price: 140
};
const shoes = {
  name: "Sport shoes",
  category: "Sport",
  discount: true,
  img: "./assets/shoes.png",
  price: 320
};
const hammer = {
  name: "Hammer",
  category: "Tools",
  img: "./assets/hammer.jpeg",
  price: 40
};
const saw = {
  name: "Saw",
  category: "Tools",
  discount: true,
  img: "./assets/saw.jpeg",
  price: 75
};
const shark = {
  name: "Shark toy",
  category: "Other",
  img: "./assets/shark.jpeg",
  price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];

// 2. Получить суммарную стоимость всех товаров массива `products`
// let result2 = products.reduce((acc, elem) => acc + elem.price, 0)
// console.log(result2);

// 3. Из массива строк `strings` получить объект, 
// в котором ключами будут строки из массива, а значениями - длины этих строк. Пример:

 // Исходный массив
 let arr = ["This", "is", "an", "array", "of", "strings"];
 // Ожидаемый результат
//  {
//   this: 4,
//   is: 2,
//   an: 2,
//   array: 5,
//   of: 2,
//   strings: 7
//  }


// let result3 = strings.reduce((acc, elem) => {
//     acc[elem] = elem.length
//     return acc
// }, {})
// console.log(result3);


// 4. Получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, 
// и добавлять в "аккумулятор" свойство category рассматриваемого товара)
// let result4 = products.reduce((acc, elem) => {
//     acc.push(elem.category)
//     return acc
// }, [])

// console.log(result4);

// 6. Получить объект, в котором будут суммарные стоимости товаров по категориям.
// let result6 = products.reduce((acc, elem) => {
//     acc[elem.category] ? (acc[elem.category] += elem.price) : (acc[elem.category] = elem.price)
//     return acc
// }, {})
// console.log(result6);


// 7. Написать функцию `removeDuplicates`. Она принимает на вход массив, 
//  должна вернуть новый массив, который не содержит дубликатов.

// let removeDuplicates = [1, 4, 7, 1, 2, 3, 3, 2, 2, 4, 9]; // [1, 4, 7, 2, 3, 9]

// let result7 = removeDuplicates.filter((elem, ind, arr) => {
//     return arr.indexOf(elem) === ind
// })
// console.log(result7);


// 8. Задача "со звездочкой". Получить массив с текстами всех параграфов на странице.
let pars = document.querySelectorAll('p')
let result8 = Array.from(pars).reduce((acc, elem) =>{
    acc.push(elem.textContent)
    return acc
}, [])
console.log(result8);