let numbers = [1,2,3,4,5,6];
numbers = numbers.map(elem => elem**2);
function customMap(arr, callback) {
    let array = [];

    for (let i = 0; i < numbers.length; i++) {
        array.push(callback(arr[i]))
        
    }
    return array;
}
console.log(customMap(elem => elem**2));

let numbers2 = [2, 4, 5, 68, 9, 3, 1];

let result = function (arr) {
    let sum = 0;

    arr.forEach(val => {
        sum += val;
    });

    return sum;
}

console.log(result(numbers));

let resultV2 = numbers.reduce((sum, val)=> sum + val, 0);

console.log(resultV2);

 