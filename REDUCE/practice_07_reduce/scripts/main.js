// We will work here!

const numbers = [10, 45, 3, 9, 19, 11, -5, 0, 7, 21, 89, 68, 1, 13, 8];
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




// 1. Дан массив строк. Из него нужно получить новый массив строк, приведенных к верхнему регистру.

// let strings2 = ['str1', 'Str2', 'sTr3'];
// let result = strings2.map(str => str.toUpperCase())
// console.log(result); // Expected: ['STR1', 'STR2', 'STR3']

// 2. Дан массив объектов `products` (товары). Получить из него массив имен товаров.
let products = [ball, gloves, shoes, hammer, saw];
// let result = products.map(elem => elem.name)

// console.log(result);

// 3. Получить из массива `products` массив объектов, которые содержат только название и цену товара. 
// То есть, объект товара "превращается" в объект, у которого есть только свойства name, price.
// let result = products.map (elem => ({name: elem.name, price: elem.price}))
// console.log(result);


// 4. Дан массив строк. Представим, что эти строки - тексты элементов списка, 
// полученных с "бэка". Наша задача - создать неупорядоченный список (`ul`) на нашей странице, 
// и добавить в него эти элементы (в виде тегов `li`). Списку добавить класс `custom_ul`. 
// Добавить список на страницу после элемента <div.root>.

/*
 - создать DOM-элемент, через метод document.createElement
 - нужно пройтись по массиву строк (strings), дял каждого элемента массива нужно создать DOM-элемент li
 - для этих элементов списка, нужно добавить текст через атрибут textContent, и записать туда строку-элемент массива
 - нужно добавить эти элементы li в наш контейнер ul
 - нужно наш контейнер ul добавить на страницу после DOM-элемента div с классом root. Для этого надо будет найти этот элементе через document.querySelector
*/

// const ulContainer = document.createElement('ul')
// ulContainer.classList.add('custom_ul')

// strings.forEach(str => {
//   const firstLi = document.createElement('li')
//   firstLi.textContent = str;
//   ulContainer.append(firstLi)
// })
// const rootDiv = document.querySelector('div.root')
// rootDiv.after(ulContainer)


// 5. Отсортировать массив строк `strings` по возрастанию.
// let result = strings.sort()
// console.log(strings);

// 6. Отсортировать массив чисел `numbers` по убыванию.
// let result = numbers.sort((a,b) => b - a)
// console.log(result);

// 7. Отсортировать массив объектов `products` по возрастанию цены.
// let result = products.sort((a,b) => a.price - b.price)
// console.log(result);

// 8. Отсортировать массив строк по убыванию кол-ва символов в строке;
// let result = strings.sort((a,b) => b.length - a.length)
// console.log(result);

// 9. отсортировать массив объектов (товары) по категории (в алфавитном порядке), 
// и по возрастанию цены. Т.е упорядочить по категориям, и в разрезе категорий - по возрастанию цены.
// let result = products.sort((a,b) => {
//   if (a.category > b.category) return 1
//   if (a.category < b.category) return -1

//   return a.price - b.price;
// })
// console.log(result);


// 10. Работа с методом `reduce`.

// - получить сумму элементов массива numbers
// let result = numbers.reduce((sum, elem) => sum + elem, 0)
// console.log(result);

// - получить суммарную стоимость всех товаров массива `products`
// let result = products.reduce((sum, elem) => sum + elem.price, 0)
// console.log(result);

//- из массива строк `strings` получить объект, в котором ключами будут строки из массива, 
// а значениями - длины этих строк. Пример:
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

//  - получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, 
// и добавлять в "аккумулятор" свойство category рассматриваемого товара)
//  - получить объект, в котором будут категории товаров.
//  - получить объект, в котором будут суммарные стоимости товаров по категориям.