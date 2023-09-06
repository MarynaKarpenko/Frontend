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

// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// Отфильтруйте массив, оставив только товары, которые начинаются на букву 'В'
// let result = goods.filter((elem) => elem[0] === 'В')
// console.log(result);

// let result2 = goods.filter((elem) => elem.startsWith === 'В')
// console.log(result2);

// let result3 = goods.filter((elem) => elem.charAt(0) === 'В')
// console.log(result3);


// Отфильтруйте массив таким образом, оставив толко элементы длина которых будет более 6 символов

// Получаемые ел массива
// 1. Зкачение ел массива
// 2. Индекс эл массива
// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// let result = goods.filter((elem) => elem.length > 6)
// let result = goods.filter((elem, ind) => ind > 2 || elem[0 == 'В'])
// console.log(result);

// let result = goods.filter((elem, ind, arr) => console.log(elem, ind, arr))

// Отфильтруйте массив таким образом, чтобы остались элементы с четным индексом
// let result = goods.filter((_, ind) => ind % 2 === 0)
// console.log(result)


//----------------------------------
// Метод find()
// Метод осущ поиск эл в массиве по условию
// Возвращает первый найденный елем
// если не находит, то возвр - undefined

// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// let result = goods.find((elem) => elem[0] == 'В')
// let result = goods.find((_, ind) => ind === 4)
// console.log(result);

// ---------------------------------------
// Метод findIndex()
// Делает все тоже самое, но возвр индекс найденного эл
// если не находит, то возвр - -1

// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Neena', salary: 2000},
//     {id: 3, name: 'Willyam', salary: 3000},
//     {id: 4, name: 'John', salary: 4000},
//     {id: 5, name: 'Steven', salary: 4400},
//     {id: 6, name: 'Gendalf', salary: 200},
// ]

// Найти элемент, значения id которого будет больше 4
// Отфильтруйте массив таким образом, получив пользователей с зарплатой от 3000 до 4500 включительно
// let result1 = users.find((elem) => elem.id > 4)
// let result2 = users.filter(elem => elem.salary >= 3000 && elem.salary <= 4500)
// console.log(result1);
// console.log(result2);


//-------------------------------------------
// Метод map()
// Метод переопределяет значение елемента массива по указанному в колбеке значению
// Метод возвращает новый массив

// let array = [1, 2, 3, 4, 5]
// let result = array.map(elem => elem ** 2) //[ 1, 4, 9, 16, 25 ]
// let result2 = array.map((elem, ind) => [elem, ind]) //[ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]
// console.log(result);
// console.log(result2);


// let prices = [200,500,1000,150,780,2000]
// В магазине объявлена распродажа. Стоимость всех товаров упало на 20%
// Сформируйте массив с новыми ценами с учетом указанной скидки
// let result = prices.map(elem => elem * 0.8)
// console.log(result);

// let users = [
//     {first_name: 'Alex', last_name: 'Wilyam', second_name: 'Agreos'},
//     {first_name: 'Steven', last_name: 'Negroni', second_name: 'Prostif'},
//     {first_name: 'Neena', last_name: 'Jeneffer', second_name: 'Greatiros'},
//     {first_name: 'John', last_name: 'Lemas', second_name: 'Klement'},
// ]

// Создайте новый массив который будет хранить иницалы пользователей по следующему примеру:
// 'A. W. Agreos'
// let result = users.map(elem => `${elem.first_name [0]}. ${elem.last_name [0]}. ${elem.second_name}`)
// console.log(result);

//---------------------------------
// Метод sort()
// Метод мутирует исходный массив
// Метод сортирует элементы массива
// Метод возвращает ссылку на старый массив

// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// goods.sort()
// console.log(goods); // [ 'Велосипед', 'Вишня', 'Груша', 'Ручка', 'Телевизор', 'Яблока' ]


// let prices = [200,500,1000,150,780,2000]
// prices.sort()
// console.log(prices); // [ 1000, 150, 200, 2000, 500, 780 ]

// полная запись
// prices.sort((crElem, nxElem) => {
//     if (crElem > nxElem) return 1
//     if (crElem < nxElem) return -1
//     if (crElem === nxElem) return 0
// })
// console.log(prices);

// сорт по убыванию
// prices.sort((crElem, nxElem) => {
//     if (crElem > nxElem) return -1
//     if (crElem < nxElem) return 1
//     if (crElem === nxElem) return 0
// })
// console.log(prices);


// полная запись
// prices.sort((crElem, nxElem) => crElem - nxElem)
// console.log(prices);

// prices.sort((crElem, nxElem) => nxElem - crElem)
// console.log(prices);

// -------------------------------------------
// Задача
// Отсортуйте массив users по атрибуту salary
// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Neena', salary: 2000},
//     {id: 3, name: 'Willyam', salary: 3000},
//     {id: 4, name: 'John', salary: 4000},
//     {id: 5, name: 'Steven', salary: 4400},
//     {id: 6, name: 'Gendalf', salary: 200},
// ]

// let result = users.sort((crElem, nxElem) => crElem.salary - nxElem.salary)
// console.log(result);

// Сортировка по name
// users.sort((a, b) => {
//     if (a.name > b.name) return 1
//     if (a.name < b.name) return -1
//     if (a.name === b.name) return 0
// })
// console.log(users);


// Метод опред unicode символа
// console.log('A'.charCodeAt());

//-------------------------------------------------
// Метод Reduce()
// Метод позволяет рассчитать агрегационные значения (решает аналитические задачи)

// Решение через цикл
// let arr = [1,2,3,4,5]
// let sum = 0
// for (let elem of arr) {
//     sum = sum + elem
// }
// console.log(sum);

// Решение через Reduse
// let sum = arr.reduce((acum, elem) => acum + elem)
// console.log(sum);


//-----------------------------
// Найти среднее значение
// let arg = arr.reduce((acum, elem) => acum + (elem / arr.length), 0)
// console.log(arg);

// ---------------------------------
// Задача
// Рассчитайте сумму всех зарплат
// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Neena', salary: 2000},
//     {id: 3, name: 'Willyam', salary: 3000},
//     {id: 4, name: 'John', salary: 4000},
//     {id: 5, name: 'Steven', salary: 4400},
//     {id: 6, name: 'Gendalf', salary: 200},
// ]
// let salarys = users.reduce((acum, elem) => acum + elem.salary, 0)
// console.log(salarys);

//---------------------------------------
// Посчитать сумму всех элементов
// let matrix = [
//     [1,2,3],
//     [4,5,6,3,4,5],
//     [7,8,9]
// ]
// let sum = matrix.reduce((acc, elem) => {
//     let arr_sum = elem.reduce((acc, sum) => acc + sum, 0)
//     return acc + arr_sum
// }, 0)

// let sum = matrix.reduce((acc, elem) => acc.concat(elem), [])
// console.log(sum);


//-----------------------------------
// Расчитайте среднюю длину строки в массиве goods
// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// let averageLength = goods.reduce((avg, elem) => avg + (elem.length / goods.length), 0)
// console.log(averageLength);


//---------------------------------
// Метод split()
// Метод для строковых типов, кот переоьразовывает строку в массив, указав в качестве аргумента разделитель
// let string = 'Some string!'
// console.log(string.split(' ')); //[ 'Some', 'string!' ]


//---------------------
// Метод join()
// Из массива возвр строку
// let string = ['Some string!']
// console.log(string.join(' ')); //Some string!