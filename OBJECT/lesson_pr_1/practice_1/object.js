// метод assign объелиняет указанные объекты в один
// let obj1 = {
//     name: 'Alex',
//     age: 30
// }
// let obj2 = {
//     salary: 1000,
//     isJob: true
// }
// let obj3 = Object.assign(obj1, obj2)

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// console.log(obj3 === obj1);


// --------------------------------------
// Rest Spred операторы
// let a = [1,2,3,4,5,6,7]
// console.log(...a); //1 2 3 4 5 6 7
// console.log(a); //[1, 2, 3, 4,5, 6, 7]


// Rest - собирает данные
// Spred - распаковывает
// function log(...a) {
//     console.log(a);
// }
// log(10,20)

// ----------------------------
// Напишите функцию quad(), которая будет принимать n-ое количество аргументов в виде чисел
// и консоль выводить значение квадрата каждого числа через пробел
// function quad(...numbers) {
//     let new_arr = numbers.map(elem => elem ** 2)
//     console.log(...new_arr);
// }
// quad(2, 10, 20, 100);


//-------------------------------
// Задача 2 
// Напишите функцию sum()которая будет принимать n-ое количество аргументов в виде чисел
// и в консоль выводить значение cуммы всех указанныъ чисел


// function sum(...numbers) {
//     let sum = 0;
//     for (let elem of numbers) {
//         sum += elem   
//     }
//     console.log(sum);
// }
// sum(1,2,3);
// sum(1,1,1,1,1,1,1);

// function sum2(...numbers) {
//     console.log(numbers.reduce((acum, elem) => acum + elem));
// }
// sum2(1,2,3);
// sum2(1,1,1,1,1,1,1);
// sum(1,2,3) => 6
// sum(1,1,1,1,1,1,1) => 7


//-----------------------------------
// Еще один пример конструкции rest оператора внутри функции

// function log(a, ...b) {
//     console.log(a); // 1
//     console.log(b); // [2,3,4]
// } log(1,2,3,4)


//---------------------------------------
// Деструктуризация - это возможность создать n-ое количество переменной одной строчкой кода
// Назначение - это создание отдельных выражений, которые содержат данные объекта

// let a = 10
// let b = 20
// let c = 30

// let [a,c,b] = [10,20,30]

// console.log(a);
// console.log(b);
// console.log(c);

//-----------------------
// let contact = [89999999, 'Alex', 'm']
// let [phone, name, gender] = contact
// getContact(phone)
// getName(name)


//--------------------------
//Возможные случаи диструкторизации
// Присвоение будет идти с лева на право
// let [a,b,c] = [1,2,3,4,5]
// console.log(a); //1
// console.log(b); //2
// console.log(c); //3


//-----------------------
// другой вариант
// let [a,b,c,d] = [1,2]
// console.log(a); //1
// console.log(b); //2
// console.log(c); // undefined
// console.log(d); // undefined


//----------------------------
// let [a,...b] = [1,2,3,4]
// console.log(a); // 1
// console.log(b); // [ 2, 3, 4 ]

//---------------------
// диструктуризация с объектами
// let obj = {
//     name: 'Alex',
//     age: 30
// }
// let {a,b} = obj
// console.log(name);
// console.log(age);

//---------------------------------
// диструктуризация внутри объекта
// let obj = {
//     name: 'Alex',
//     age: 30,
//     salary: 1000
// }
// let {name, ...user_info} = obj
// console.log(name); // Alex
// console.log(user_info); // { age: 30, salary: 1000 }





//--------------------------------------
// Флаги и дескрипторы свойств
let obj = {title: 'О погоде'}

// writable       - свойство (или флаг), который запрещает/разрешает менять значение свойства
// enumerable     - свойство (или флаг), который запрещает итерироваться этому свойству
// configurable   - свойство (или флаг), который запрещает/разрешает удалять свойство

//----------------------------
// Object.getOwnPropertyDescriptor() - метод, который позволяет получить информацию о флагах
console.log(Object.getOwnPropertyDescriptor(obj, 'text'));