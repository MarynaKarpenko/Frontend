// const a = "text"
// const b = 34

// let z // для объявления переменной
// const c = true

// const d = [] // массив

// const e {} // объекты

// const f = function name(params) {

// }

// function fff(params) {
//     console.log("Hello");
// }
// console.log(typeof fff); 

// function sumFunc(a, b) {
//     return a + b
    
//     // return res
// }
// const result = sumFunc(5, 9)
// document.write(result)
// const result = sumFunc(Number(prompt()), prompt())

// const newResult = sumFunc(34, 23)
// console.log(newResult);
// console.log(result + 12);


// function sumFunc(x, y) {
//     return x + y
// }
// console.log(sumFunc(5, 3)) //8 
// console.log(sumFunc(10, 6)) // 16


// const obj = {
//     name: "Vacho",
//     sumFunc: sumFunc
// }
// console.log(obj)


// const console = {
//     assert: assert,
//     clear: clear,
//     log: log
// }
// console.log


// Task 1. Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
// function printCube(num) {
//     let cube = num ** 3; // куб
//     console.log(cube);
//     return cube
// }
// printCube(3); // первый вариант

// function func(a) {
//     return a ** 3
// }
// console.log(func(3));
// document.write(func(3))
// alert(func(3)) // второй вариант

// Task 2. Сделайте функцию, которая параметром принимает число и проверяет, 
// положительное это число или отрицательное. 
// В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
// function printNegativePositive(number1) {
//         if(number1 > 0) {
//             console.log('Positive');
//             return 'Positive'
//         } else if (number1 === 0) {
//             return 'Равно'
//         } else {
//             return 'Negative'
//         }
// }
// printNegativePositive(20) // первый вариант

// const a = +prompt('введите число')
// function num(a) {
//     if (a >= 0) {
//         console.log("положительное")
//     }
//     else {
//         console.log("отрицательное")
//     }
// }
// num(a) // второй вариант

// let aa = 10
// function num() {
//     // локальная область видимости
//     let a = 10
// }
// if () {
//     let a = 10
// }

// for (let i = 0; i < array.length; i++) {
//     let a = 10
// }

// let global = 10 

// function num() {
//    // локальная область видимости 
//     let local = 12
//    console.log('local', local);
//    console.log('local', global)
//    // из локал мы видим глобал

// }
// console.log('global', local); // error
// // из глобал не видно переменная 
// // объявленная в локал
// console.log('global', global)

// Task 3. В программе объявлена переменная list которая содержит массив чисел 
// Используя цикл посчитайте сумму чисел и выведите их в консоль
// const list = [23, 354, -23, 45, 23, 34] 
// let res = 0 // global
// for (let i = 0; i < list.length; i++) {
//     // let res = 0
//     // local

//     res = res + list[i] // или res += list[i]
//     // 0 = 0 + 23
//     // 23 = 23 + 354...
// }
// console.log(res)

// Task 4. В программе объявлена переменная list, которая содержит массив чисел. 
// Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// const list = [23, 354, -23, 45, 23, 34]

// let even = 0
// let odd = 0

// for (let i = 0; i < list.length; i++) {
//     if (list[i] % 2 === 0) { // подсчет четных чисел
//         even = even + list[i]
//     } else if(list[i] % 2 !== 0) { // подсчет не четных
//         odd = odd + list[i]
//     }
// }
// let totel = even - odd
// console.log(totel);


// console.log(10 == 10); // true строгое сравнение
// console.log(10 == '10'); // true
// console.log(10 === 10); // true
// console.log(10 === '10'); // false не строгое сравнение

// push
// let arr = []
// arr[3] = '34'
// // arr.push('text', 23 ,345) // добавляет элементы в конец массива
// // arr.unshift(promt()) // смысл как в push, но добавляет вначало массива
// arr.pop()
// // удаляет последний элемент массива
// arr.shift()
// // удаляет первый элемент массива
// console.log(arr);


// Task 5. Напишите функцию, которая в качестве аргументов получает два числа 
// и возвращает массив чисел со значениями от меньшего числа к большему.

// function range(num1, num2) {
// 	if(num1 < num2){
// 		const tmp = num1;
// 		num1 = num2;
// 		num2 = tmp;
// 	}
// 	let arr = []
// 	for (let i = num1; i < num2; i++ ) {

// 	}
// 	return arr
// } 
// console.log(range(2,9)); // второй вариант

function func(val_1, val_2) {
    let arr = []
    let start 
    let end 
    if (val_1 > val_2) {
        start = val_2
        end = val_1
    } else {
        start = val_1
        end = val_2
    }

    for (let i = start; i < end; i++) {
        arr.push(i)
    }
    return arr
}
console.log(func(9, 2));
