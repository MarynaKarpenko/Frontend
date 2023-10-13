// const promise = new Promise(function(resolve, reject){
//     const value = Math.random()
//     if (value > 0.5) {
//         resolve()
//     }else {
//         reject()
//     }
// })

// promise.then(
//     () => console.log('купил торт'), // resolve()
//     () => console.log('отправил СМС об отсутствии торта') // reject()
// )


//-----------------------------------------------------

// const handler = (data) =>{
//     // сформировать массив, состоящий из строк (username)
//     // вывести получившийся массив в консоль
//     // const result = data.map(user => user.name)
//     // console.log(result);

//     // написать обработчик, который формирует массив из объектов. У каждого объекта одно свойство
//     // username

// }

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(
//     (resp) => resp.json(),
//     () => console.log('some arrors with requerst')
// ).then(
//     handler,
//     () => console.log('some arrors with requerst')
// )


//-------------------------------
// Методы массивов
// forEach - для прохода по элиментов массива, возвращает undefined

// map - для формирования нового массива на основе старого
// возвращает новый массива

// filter - для формирования нового массива, состоящего только из тех элементов, которые подходят по условию
// возвращает новый массив 

// find - для поиска элемента по условию. 
// возвращает первый элемент, который подходит по условию 

// reduce - для расчета агрегации 
// возвращает все что угодно

// const arr = [13, 5, 2, 6, 23, 6, 34]
// // вывести все элементы массива
// arr.forEach(elem => {
//     if (elem > 10) {
//         console.log(elem);
//     }
// })


// const arr = [13, 5, 2, 6, 23, 6, 34]
// // вывести только положительные числа
// arr.forEach(elem => {
//     if (elem > 0) {
//         console.log(elem);
//     }
// })

//----------------------------
// const arr = [13, -5, 2, -6, 23, 6, -34]
// // создать новый массив, в котором все элементы увеличены на 10.
// const result = arr.map(elem => elem + 10)
// console.log(result);


//-------------------------------

// создать новый массив, который содержит только пложительные числа
// отрицательные нужно преобразовать в положительные (-5 -> 5)

// const arr = [13, -5, 2, -6, 23, 6, -34]
// const result = arr.map(elem => {
//     if (elem < 0) {
//         return -elem
//     }else{
//         return elem
//     }
// })
// console.log(result);


//----------------------------------------------
// создать новый массив, который содержит квадраты этих чисел
// const arr = [13, -5, 2, -6, 23, 6, -34]
// const result = arr.map(elem => elem * elem)
// console.log(result);


//---------------------------------------------
// создать массив из чисел, которые меньше 10
// const arr = [13, -5, 2, -6, 23, 6, -34]
// const result = arr.filter(elem => elem < 10)
// console.log(result);

// создать массив, который содержит только отрицательные числа, переобразовав их в положительные
// const arr = [13, -5, 2, -6, 23, 6, -34]
// const result = arr.filter(elem => elem < 0).map(elem => -elem)
// console.log(result);

//---------------------------------------
const products = [
    {id: 1, title: 'велосипед', price: 3400, count: 10},
    {id: 2, title: 'ролики', price: 560, count: 0},
    {id: 3, title: 'самокат', price: 900, count: 5},
    {id: 4, title: 'лыжи', price: 2200, count: 3},
    {id: 5, title: 'коньки', price: 920, count: 0},
    {id: 6, title: 'скейт', price: 1100, count: 7}
]
// вывести все объекты в консоль
// products.forEach(elem => console.log(elem))

// вывести все названия товаров в консоль
// products.forEach(elem => console.log(elem.title))


// сформировать массив, который состоит только из тех товаров, которые дешевле 1000
// const new_arr = products.filter(elem => elem.price < 1000)
// console.log(new_arr);


// сформировать массив, который состоит из названий товаров, которые дешевле 1000
// const new_arr = products.filter(elem => elem.price < 1000).map(elem => elem.title)
// console.log(new_arr);


// сформировать массив, который содержит объекты со свойствами title и price
// const new_arr = products.map(elem => ({title: elem.title, price: elem.price}))
// console.log(new_arr);

const new_arr = products.map(({title, price}) => {
    return {title,price}
})
console.log(new_arr);