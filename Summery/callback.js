// Callback (функция обратного вызова) - это функция, переданная в другую функцию в качестве аргумента

const mult1 = () => 2 * 2; // 4
const mult2 = () => 2 * 3; // 6
const mult3 = () => 2 * 4; // 8
const mult4 = () => 2 * 5; // 10

const mult = n => 2 * n
mult(10); // 20

// 1. Написать функцию, которая принимает массив с числами и возвращает новый массив с этими числами, умноженными на 2

const multNums = arr => {
    const new_arr = [];
  
    for(let i = 0; i < arr.length; i++){
      new_arr.push(arr[i] * 2)
    }
  
    return new_arr
  }
  
  // console.log(multNums([2, 5, 10, 15])); // [4, 10, 20, 30]
  
  // 2. Написать функцию, которая принимает массив с числами и возвращает новый массив с этими числами, деленными на 2
  
  
  const divideNums = arr => {
    const new_arr = [];
  
    for(let i = 0; i < arr.length; i++){
      new_arr.push(arr[i] / 2)
    }
  
    return new_arr
  }
  
  // console.log(divideNums([2, 5, 10, 15])); // [1, 2.5, 5, 7.5]
  
  
  // 3. Написать функцию, которая принимает массив с числами и возвращает новый массив с этими числами, увеличенными на 10
  
  const plusNums = arr => {
    const new_arr = [];
  
    for(let i = 0; i < arr.length; i++){
      new_arr.push(arr[i] + 10)
    }
  
    return new_arr
  }
  
  // console.log(plusNums([2, 5, 10, 15])); // [12, 15, 20, 25]

// Callback (функция обратного вызова) - это функция, переданная в другую функцию в качестве аргумента
// High-order function (функция высшего порядка) - это функция, которая принимает другую функцию в качестве аргумента

const changeNums = (arr, instruction) => {
    const new_arr = [];

    for(let i = 0; i < arr.length; i++){
        new_arr.push(instruction(arr[i]))
    }
    return new_arr
}
const multN = a => a * 2;
const divideN = a => a / 2;
const plusN = a => a + 10;
const powN = a => a ** 2;

console.log(changeNums([2, 5, 10, 15], divideN)); // [1, 2.5, 5, 7.5]
console.log(changeNums([2, 5, 10, 15], powN)); // [ 4, 25, 100, 225 ]
console.log(changeNums([2, 5, 10, 15], plusN)); // [ 12, 15, 20, 25 ]
console.log(changeNums([2, 5, 10, 15], multN)); // [ 4, 10, 20, 30 ]