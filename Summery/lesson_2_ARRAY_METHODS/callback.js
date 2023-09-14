function doubleTwo() {
    return 2 * 2
}

function doubleThree() {
    return 2 * 3
}

function doubleFour() {
    return 2 * 4
}

function doubleNum(num) {
    return 2 * num
}
const num1 = doubleNum(3)
const num2 = doubleNum(20)
const num3 = doubleNum(350)
console.log(num1); //6
console.log(num2); 
console.log(num3); 

// Написать, функц, которая будет принимать массив с числами и возвращать новый массив со всеми часлами, умноженнвми на 2

const numbers = [1,2,3,4,5]
const numbers2 = [10,20,30,40,50]
const doubleNumber = arr => {
    const newArr = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i] * 2)
    }
    return newArr
}
console.log(doubleNumber(numbers)); // [2,4,6,8,10]
console.log(doubleNumber(numbers2)); // [10,20,40,60,80,100]
console.log(doubleNumber([23,54,100])); // [46,108,200]


// Написать, функц, которая будет принимать массив с числами и возвращать новый массив со всеми часлами, умноженнвми на 2
const numbers3 = [1,2,3,4,5]
const numbers4 = [10,20,30,40,50]
const divideNumber = arr => {
    const newArr = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i] / 2)
    }
    return newArr
}
console.log(divideNumber(numbers3)); // [0.5, 1, 1.5, 2, 2.5]
console.log(divideNumber(numbers4)); // [2, 10, 15, 20, 25]
console.log(divideNumber([23,54,100])); // [11.5, 27, 50]


// Написать, функц, которая будет принимать массив с числами и фенкцию описывающею, что нужно сделать с числами прежде, чем их добавить в новый массив

const changeNumbers = (arr, callback) => {
    const newArr = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(callback(arr[i]))
    }
    return newArr
}

const double = num => num * 2
const divide = num => num / 2
const pow = num => num ** 2
const sum100 = num => num + 100

console.log(changeNumbers(numbers, double));
console.log(changeNumbers(numbers, divide));
console.log(changeNumbers(numbers, pow));

console.log(changeNumbers(numbers2, double));
console.log(changeNumbers(numbers2, divide));
console.log(changeNumbers(numbers2, pow));


const a = numbers.map(el => el * 2)
const b = numbers.map(el => el / 2)
const c = numbers.map(pow)