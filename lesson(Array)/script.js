const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // [ 1, 2, 3, 4, 5, 6 ] добавляет елемент в конец массива
numbers.pop(); // [ 1, 2, 3, 4, 5 ] удаляет елемент в конеце массива при каждом вызове
numbers.unshift(0); // [ 0, 1, 2, 3, 4, 5 ] добавляет елемент в начале массива
numbers.shift(0); // [ 1, 2, 3, 4, 5 ] удаляет первый елемент массива
// console.log(numbers);
// console.log(numbers.length); // 5

// 1. Из массива numbers вывести в консоль третий элемент (элемент с индексом 2)

// console.log(numbers[2]);

// 2. Дан массив чисел numbers. Вывести в консоль все числа массива

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// } 
// 1
// 2
// 3
// 4
// 5

// const new_numbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     new_numbers.push(numbers[i] * 2)
// }
// console.log(new_numbers); // [ 2, 4, 6, 8, 10 ]

// 4. Напишите функцию, которая будет принимать в качестве аргумента массив чисел и возвращать 
// новый массив со всеми числами переданного массива, умножеными на 2
// const mutNumbers = arr => {
//     const new_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         new_arr.push(arr[i] * 2)
//     }
//     return new_arr
// }
// console.log(mutNumbers([1, 2, 3, 4, 5])); // [ 2, 4, 6, 8, 10 ]
// console.log(mutNumbers([10, 43, 55])); // [ 20, 86, 110]

// 5. Напишите функцию multNumbers2(), которая будет принимать два аргумента - массив чисел и число. 
// Функция должна возвращать новый массив со всеми числами переданного массива, умножеными на переаднное число

const multNumbers2 = (arr, number) => {
    const new_arr = []
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(arr[i] * number)
    }
    return new_arr
}
// console.log(multNumbers2([1, 2, 3, 4, 5], 3)); // [3, 6, 9, 12, 15]
// console.log(multNumbers2([10, 43, 55], 0)); // [0, 0, 0]
// console.log(multNumbers2([32, 1, 15, 25], 2)); // [64, 2, 30, 50]

// 6. Напишите функцию getEvenNums(), которая принимает массив с числами и возвращает новый массив с 
// четными числами из переданного массива

const getEvenNums = arr => {
    const new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
// console.log(getEvenNums([1, 64, 34, 5, 18])); // [64, 34, 18]
// console.log(getEvenNums([70, 52, 3, 7])); // [70, 52]

// 7. Найпишите функцию getLongStrings(), которая будет принимать массив со строками и 
// возвращать новый массив только со строками длинее 5 символов

const getLongStrings = arr => {
    const new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
// console.log(getLongStrings(['hi', 'good morning', 'bye'])); // ['good morning']
// console.log(getLongStrings(['Anna', 'Irina', 'Natalia', 'Ivan', 'Stepan'])); // ['Natalia', 'Stepan']

// 8. Напишите функцию, которая принимает массив со строками и возвращает новый массив. 
// Если строка длиннее 5 символов, то в новый массив добавляется строка 'longer than 5', 
// а если 5 и короче - то 'shorter than 5'

const getLongStrings2 = arr => {
    const new_arr = []
    for (let i = 0; i < arr.length; i++) {

        // 1 вариант
        // arr[i].length > 5 ? "longer than 5" : "shorter than 5";

        // 2 выриант
    //     if (arr[i].length > 5) {
    //         new_arr.push("longer than 5")
    //     } else {
    //         new_arr.push("shorter than 5")
    //     }

    // 3 вариант
    new_arr.push(arr[i].length > 5 ? "longer than 5" : "shorter than 5");
    }
    return new_arr
}
// console.log(getLongStrings2(['hi', 'good morning', 'bye'])); // ['shorter than 5', 'longer than 5', 'shorter than 5']
// console.log(getLongStrings2(['Anna', 'Irina', 'Natalia', 'Ivan', 'Stepan'])); // ['shorter than 5', 'shorter than 5', 'longer than 5', 'shorter than 5', 'longer than 5']


// 9. Напишите функцию getNumbersFromArray(), которая принимает массив с разными типами данных и 
// возвращает новый массив только с числами
// typeof

const getNumbersFromArray = arr => {
    const new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            new_arr.push(arr[i]);
        }
    }
    return new_arr
}
// console.log(getNumbersFromArray([1, 'hello', true, 6, 87, 'bye'])); // [1, 6, 87]


// 10. Написать функцию changeStrings(), которая принимает массив с разными типами данных и 
// возвращает новый массив, где все строки будут заменены на строку 'XXXXX'

const changeStrings = arr => {
    const new_arr = []
    for (let i = 0; i < arr.length; i++) {
        // 1 вариант
        typeof arr[i] === 'string' ? new_arr.push('XXXXX') : new_arr.push(arr[i]);

        // 2 вариант
        // if (typeof arr[i] === 'string') {
        //     new_arr.push('XXXXX');
        // } else {
        //     new_arr.push(arr[i]);
        // }
    }
    return new_arr
}
console.log(changeStrings([1, 'hello', true, 6, 87, 'bye'])); // [1, 'XXXXX', true, 6, 87, 'XXXXX']