// сравнение объэктов
// let obj1 = {
//     name: 'Alex',
//     age: 50
// }
// let obj2 = {
//     name: 'Alex',
//     age: 50
// }
// console.log(obj1 == obj2); // false
// при сравнении объектов переменные зранят ссылку на ячейку в области памяти
// сравнение одинаковых объектов будет давать false


// --------------------------
// let obj1 = {
//     name: 'Alex',
//     age: 50
// }
// let obj2 = obj1
// obj.age = 30
// console.log(obj2);


//-------------------------------
// копия об
let obj1 = {
    name: 'Alex',
    age: 50
}
let obj2 = {...obj1}
console.log(obj1 === obj2);
// false, об. разнын, посколюку сформирована копия