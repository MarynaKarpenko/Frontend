// THIS - может менятся в зависимости от значения
// console.log(this);
// window.alert()
// window.fetch()

// Пример 1
// let obj1 = {
//     name: 'Alex',
//     age: 30,
//     info: () => {
//         // console.log(`${this.name} ${this.age}`); 
//         // console.log(this); => Window
//     }    
// }
// obj1.info()

// Пример 2
// let obj1 = {
//     username: 'Alex',
//     age: 30,
//     info: function(){
//             console.log(`${this.username} ${this.age}`);
//     }
// }
// let func = function(){
//             console.log(`${this.username} ${this.age}`, this);
// }
// func()

// ========================================
// let user_steven = {
//     name: 'Steven',
//     age: 30
// }
// let user_neena = {
//     name: 'Neena',
//     age: 23
// }
// const userInfo = function(){
//     console.log(`${this.name}`);
// }
// user_steven.logInfo = userInfo;
// user_neena.logInfo = userInfo;

// user_steven.logInfo();
// user_neena.logInfo();

// ========================================
// let obj1 = {
//     username: 'Alex',
//     age: 30,
//     info: function(){
//             console.log(`User name - ${this.username}`);
//     }
// }
// setTimeout(() =>{
//     obj1.info()
// }, 100) // => User name - Alex

// setTimeout(obj1.info, 100) // => User name - undefined

// ----------------------------------------------------
// bind - метод фуекции который привязывает значение контекста к переданному в качестве аргумента объекта
// Метод возвращает новую функцию

// let user_steven = {
//     name: 'Steven',
//     age: 30
// }
// let user_neena = {
//     name: 'Neena',
//     age: 23
// }
// const userInfo = function(n,m){
//     console.log(`User name - ${this.name} ${n * m * this.age}`);
// }
// let func_steeven = userInfo.bind(user_steven);
// func_steeven(2,3) // =>- User name - Steven


// let product1 = {
//     title: 'Velo',
//     price: 4000,
//     totalPrice: function(count, sale){
//         console.log(this.title);
//         console.log(this.price);
//         console.log(count * this.price * (1 - sale));
//     }
// }

// let product2 = {
//     title: 'Samocat',
//     price: 20,
// }
// let func = product1.totalPrice.call(product2, 10);

// product1.totalPrice.bind(product2, 20, 0.2)()
// product1.totalPrice.call(product2, 20, 0.2)
// product1.totalPrice.apply(product2, [20, 0.2])
// call - тоже самое, что и bind, но при вызове передает функцию


// Методы функции (для работы с контекстом)

// bind - метод фукнции, который привязывает занчение контекста к переданному в качестве аргумента объекту
// Метод возвращает НОВУЮ функцию, где при вызове контекст будет ссылаться на занчение переданного аргумента
// call - тоже самое, что и bind. отличие заключается в том, что при вызове call сразу вызывает функцию
// apply - тоже самое, что и call. Отлиичие заключается в том, что в качестве превого аргумента apply принимает также объект, а в кчестве второго параметра - массив с аргументами входной функции

// Задача 1
// Привяжите контекст this функции carInfo к объекту car.
// создайте новую функцию с привязанным контекстом

// let car = {
//     model: 'Tesla',
//     color: 'red'
// }

// function carInfo(){
//     console.log(`${this.model} ${this.color}`)
// }
// let func = carInfo.bind(car)
// func()

// Задача 2
// Привяжите контекст метода emplInfo к объекту empl2
// Выполните привязку таким образом, чтобы метод сразу выполнился

let empl1 = {
    name: 'John',
    age: 20,
    emplInfo: function(salary, job_id){
        console.log(`${this.name} ${this.age} ${salary} ${job_id}`)
    }
}

let empl2 = {
    name: 'Wilyam',
    age: 35
}
empl1.emplInfo.call(empl2.age, 1000, 'IT_PROG')