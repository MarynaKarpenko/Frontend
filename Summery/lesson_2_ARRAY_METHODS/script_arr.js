// 1. Дан массив с разными типами данных. 
// Написать функцию, которая возвращает количество элементов в массиве с числовым типом данных
const array = ['hello', 2, 9, NaN, undefined, 'hi', 88, true, 51, NaN]
// цикл
// const getSum = arr => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//             sum++;
//         }
//     }
//     return sum
// }
// console.log(getSum(array));

// forEch

const getSum1 = arr => {
    let sum = 0
    arr.forEach(el => typeof el === 'number' && !isNaN(el) ? sum++ : '')
  return sum
}


// filter
const getSum2 = arr => arr.filter(el => typeof el === 'number' && !isNaN(el)).length;
const getSum3 = arr => {
    const arr_filtered = arr.filter(el => typeof el === 'number' && !isNaN(el))
    return arr_filtered.length
  }

// 2. Написать функцию, которая принимает значение. Если значение число, 
// то функция возвращает это число умноженное на 15. Если значение любой другой тип данных, 
// то возвращается 'Error'

// 
function getNum(num) {
    if (typeof num === 'number') {
        return num * 15
    } 
    return 'ERROR'
}

// стрелочная ф
const getNum1 = elem => typeof elem === 'number' ? elem * 15 : 'ERROR'
console.log(getNum1(10));
console.log(getNum1(true));
console.log(getNum1('hello'));


// 3. Написать функцию, которая принимает массив и возвращает новый массив, 
// в который попадают только положительные числа из исходного массива

const numbers = [4, -10, -7, 54, 1, -9, 45];
// const getPositiveNumber = arr => arr.filter(elem => elem > 0)
// console.log(getPositiveNumber(numbers));



// 4. Написать функцию, которая принимает массив с числами и возвращает новый массив только с четными числами
// [1, 4, 7, 2, 53, 64] => [4, 2, 64]

const getEvenNums = arr => arr.filter(el => el % 2 === 0);

// НЕВЕРНО!!!!
// потому что метод map() ВСЕГДА возвращает массив такой же длинны, как и исходный массив
const getEvenNums_map = arr => arr.map(el => {
  if(el % 2 === 0){
    return el
  }
});

console.log(getEvenNums([1, 4, 7, 2, 53, 64])); //[4, 2, 64]
console.log(getEvenNums([51, 58, 100, 73, 82])); //[58, 100, 82]

console.log(getEvenNums_map([1, 4, 7, 2, 53, 64])); //[undefined, 4, undefined 2, undefined, 64]
console.log(getEvenNums_map([51, 58, 100, 73, 82])); //[undefined, 58, 100, undefined, 82]


// 5. Написать функцию, которая принимает массив с числами и возвращает новый массив только с четными числами


// [1, 4, 7, 2, 53, 64] => [4, 2, 64]

const getIsNumbers = arr => arr.filter(elem => elem % 2 === 0)
console.log(getIsNumbers(numbers));



// 5. Написать функцию, которая принимает массив с числами и возвращает массив с двумя значениями
//  - суммой всех четных чисел и суммой всех нечетных чисел

// [1, 4, 7, 2, 53, 64] => [70, 61]
// [1, 2, 3, 4, 5] => [6, 9]

const getSumArr = arr => {
    let sumEven = 0
    let sumOdds = 0

    arr.forEach(el => elem % 2 === 0 ? sumEven += el : sumOdds += el)
    return [sumEven, sumOdds]
}
console.log(getSumArr([1, 4, 5, 53, 69]));


// 6. Написать функцию, которая принимает массив с разными типами данных. 
// Функция возаращает новый массив без строк. А числовые значения умножены на 2.

// ['hello', 2, 9, undefined, 'hi', 88, true, 51] => [4, 18, undefined, 196, true, 102]

const getNewArray = arr => arr.filter(el => typeof el !== 'string').map(el => typeof el === 'number' ? el * 2 : el);

console.log(getNewArray(['hello', 2, 9, undefined, 'hi', 88, true, 51]));