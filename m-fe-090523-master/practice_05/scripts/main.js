// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw];

// 2. Пишем функцию `onlyForDiscounted`. Функция принимает массив (товаров), 
// и функцию-колбэк, которую она должна выполнить только для тех товаров, у которых `discounted = true`.
const productCallback = (product) => {
    console.log(product.name, 'is discounded');
}

function onlyForDiscounted(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
       if (arr[i].discount) {
            callback(arr[i])
       }
    }
}
onlyForDiscounted(products, productCallback)

// 3. Написать свою реализацию метода `forEach` - назовем ее `customForEach`. 
// Пишем функцию, которая принимает первым аргументом массив, 
// а вторым - функцию-колбэк, которую нужно выполнить для каждого элемента массива.

function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}
function myCallback(item) {
    console.log(item.name);
}
customForEach(products, myCallback)


// 4. Делаем аналогичное действие для `map` - пишем свою `customMap`.

function customMap(arr, callback) {
    let result = [];
        for (let i = 0; i < arr.length; i++) {
            const mapped = callback(arr[i])
            result.push(mapped)
        }
        return result;
}
const dummyMapSrc = [ 1,2,3,4,5 ];
function square(x) {
    return x * x;
}
const squares = customMap(dummyMapSrc, square);
console.log(squares);


// function myCallback() {
//     console.log('Hi from callback!');
// }

// function wrapper(callback) {
//     callback()
// }
// wrapper(myCallback)

// function customFilter(srcArray, condition) {
//     let result = [];
//     for (let i = 0; i < srcArray.length; i++) {
//         if (condition(srcArray[i]) === true) {
//             result.push(srcArray[i])
//         }
        
//     }
//     return result
// }
// const dummyFiltered = (item) => {
//     return item % 2 !== 0
// }
// const customFilter = customFilter(demoArray, dummyFilter)
// console.log(('Custom: ', customFiltered));


