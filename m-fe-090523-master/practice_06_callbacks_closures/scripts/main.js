// We will work here!

// 1. Написать функцию `doHomework`. 
// Она принимает 2 аргумента: название предмета, по которому выполняем домашку, 
// и функцию, которая решает ДЗ по предмету. Задача функции - вывести в консоль 
// сообщение вида "starting {subject} homework", и вызвать функцию-колбэк. 
// В аргументах функции-колбэка передаем предмет.

// Колбэк-функция
// function homeworkCallback(subject) {
//     console.log(`I finished my ${subject} homework!`);
// }

// Функция, которая ожидает колбэк
// function doHomework(subject, callback) {
//     console.log(`I starting ${subject} homework`);
//     callback(subject)
// }

// const subject = 'math'
// doHomework(subject, homeworkCallback);


// 2. Пишем свою реализацию метода `filter`, назовем ее `customFilter`. 
// Функция принимает 2 аргумента, массив `srcArray` и критерий отбора (колбэк). 
// Функция должна вернуть новый массив, который включает только те элементы массива `srcArray`, 
// для которых колбэк возвращает `true`.

// function customFilter(srcArray, callback) {
//     let newArr = []
//     for (let i = 0; i < srcArray.length; i++) {
//         if (callback(srcArray[i])) {
//             newArr.push(srcArray[i])
//         }
//     }
//     return newArr
// }
// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const isEven = x => x % 2 != 0
// console.log(customFilter(testArr, isEven));


// 3. Пишем функцию `firstFail`. Она примет на вход массив, и функцию-проверку `checker`. 
// Функция должна вернуть объект, у которого будут свойства:
//  - `passed` - массив, в который попадут все элементы исходного массива, для которых функция `checker` 
// вернула true - до первого "фейла".
//  - `failed` - массив, куда попадут все остальные элементы исходного массива.

// const checker = (el) => el % 2 === 0;
// firstFail( [2,8,10,7,6,4,31], checker ); // { passed: [2,8,10], failed: [7,6,4,31] }
// firstFail( [1,2,8,10,34,2], checker ); // {passed: [], failed: [1,2,8,10,34,2] }
// function firstFail(arr, callback) {
//     let passed = []
//     let failed = []
//     for (let i = 0; i < arr.length; i++) {
//        if (callback(arr[i])) {
//         passed.push(arr[i])
//        } else {
//         failed.push(arr[i])
//        }
//     }
//     return { passed, failed };
// }
// const testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const checker = (el) => el % 2 === 0
// console.log(firstFail(testArr2, checker));

// Решение 2
// function firstFail(arr, callback) {
//     let result = {
//         passed: [],
//         failed: []
//     };

//     let failIndex = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             result.passed.push(arr[i]);
//         }
//         else {
//             failIndex = i;
//             break;
//         }
//     }

//     result.failed = arr.slice(failIndex);
//     return result;
// }

// ------------------------------
// Замыкания
// 4. Переходим к замыканиям. Пишем функцию `summarizer`. 
// Она принимает аргумент `addVal`, и должна вернуть другую функцию, 
// которая также принимает число, и возвращает сумму этих двух чисел.
// function summarizer(addVal) {
//     return function (num) {
//         console.log(addVal + num);
//     }
// }
// let fun1 = summarizer(5);
// fun1(10)

//5. Пишем функцию `multiplyArray`. Она должна принять на вход массив `srcArray`, 
// и вернуть другую функцию, которая примет на вход число `multiplier`. 
// Результатом выполнения второй функции должен стать НОВЫЙ массив, который будет равен произведению элементов 
// `srcArray` на число `multiplier`.
function multiplyArray(srcArray) {
    return function (multiplier) {
        let resultArr = []
        for (let i = 0; i < srcArray.length; i++) {
            resultArr.push(srcArray[i] * multiplier)
        }
        console.log(resultArr);
    }
}
let m = multiplyArray( [1, 2, 3] );
m(2); // [2, 4, 6]
let k = multiplyArray( [5, 3, 1] ); // [15, 9, 3]
k(3)

// --------------------------------------
function multiplyArray2(srcArray2) {
    return function (multiplier2) {
        return srcArray2.map(elem => elem * multiplier2) 
    }
}
let m2 = multiplyArray2( [1, 2, 3] );
console.log(m2(2));  // [2, 4, 6]
let k2 = multiplyArray2( [5, 3, 1] ); // [15, 9, 3]
console.log(k2(3));


// 6. Реализуем вычисление арифметической прогрессии с помощью замыканий. 
// Пишем функцию `simpleProgression`, она принимает на вход один аргумент - т.н. "разность" прогрессии. 
// Задача функции - вернуть другую функцию, которую мы будем вызывать для получения следующего числа прогрессии.
//  Подсказка: в замыкании имеет смысл хранить текущее число последовательности.

// Арифметическая прогрессия - это последовательность чисел, каждое последующее число в которой получается прибавлением 
// "разности прогрессии" к предыдущему числу последовательности. Первое число последовательности - 0. Далее - прибавляем к нулю 
// "разность прогрессии", и получаем второе число последовательности. И так далее.

function simpleProgression(base) {
        let currentNumber = 0;
        let difefrence = base;
    return function (num) {
        const nextNumber = currentNumber + difefrence
        currentNumber = nextNumber;
        return nextNumber
    }
}

const generator = simpleProgression(2);
console.log(generator());  // 2
console.log(generator()); // 4
console.log(generator()); // 6
console.log(generator()); 


// 7. Реализуем "генератор" чисел Фибоначчи с помощью замыканий. 
// Числа Фибоначчи - это последовательность чисел, где следующее число равно сумме двух предыдущих. 
// Пример - 1,1,2,3,5,8,13,21,34,55,89,... Нам нужно с помощью замыканий реализовать генератор. 
// То есть, пишем функцию `fibonacciGenerator`, которая вернет нам другую функцию, 
// результатом вызова которой будет следующее число Фибоначчи. 
// Подсказка: в замыкании `fibonacciGenerator` имеет смысл хранить 2 предыдущих числа Фибоначчи, 
// и в самом начале это должны быть 1 (то есть первые два числа Фибоначчи - это единицы).

function fibonacciGenerator() {
    let firstNumber = 1
    let secondNumber = 1
    return function () {
        const numberFibonacci = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = numberFibonacci
        return numberFibonacci
    }
}

let generator2 = fibonacciGenerator(1);
console.log(generator2());  // 2
console.log(generator2()); // 3
console.log(generator2()); // 5
console.log(generator2()); // 8


// 8. Задача "со звездочкой". Нужно реализовать функцию `twoFilters`. Функция должна принимать на вход две функции-критерии фильтра, 
// и возвращать функцию, которая будет принимать на вход элемент массива, и возвращать true, если обе функции-критерии для 
// элемента массива возвращают true. То есть, применить оба фильтра к элементу массива.

function twoFilters(func1, func2) {
    return function (elem) {
        return func1(elem) && func2(elem)
    }
}

const isOdd = (x) => x % 2 === 0; // функция проверки числа на четность
const divThree = (x) => x % 3 === 0; // функция проверки числа на кратность 3

const testArray = [1,2,3,4,5,6,7,8,9];
const result = testArray.filter( twoFilters(isOdd, divThree) );
console.log(result);
// Expected result: 6


