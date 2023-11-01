// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
// numbers.push(45)
// numbers.push(45, 68, 23)
// console.log(numbers);
// numbers.pop()
// console.log(numbers)

// добавить элемент в начало массива чисел (число 9)
// numbers.unshift(9)
// console.log(numbers)

// удалить первый элемент из массива чисел
numbers.shift()
console.log(numbers);

// найти индекс числа 0  в массиве чисел
let result4 = numbers.indexOf(0)
console.log(result4);

// найти индекс объекта `shark` в массиве объектов
let result5 = products.indexOf(shark)
console.log(result5);

// найти индекс последнего вхождения числа 9 в массиве чисел
let result6 = numbers.lastIndexOf(9)
console.log(result6);



// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// добавить в массив строк новые элементы. 
// Нужно добавить после строки 'simple' две строки: 'and', 'lowercased'. 
// То есть вставляем элементы в середину массива.
// strings.splice(6, 0, 'and', 'lowercased')
// console.log(strings);

// заменить в массиве элементы: вместо строк 'simple', 'and', 'lowercased', теперь должна быть строка 'tiny'.
// strings.splice(5,3, 'tiny')
// console.log(strings);

// проверить, содержит ли массив строк строку 'array'.
let result = strings.includes('array')
console.log(result);

//создать два новых объекта. Первый - через литерал объекта и в нем должны быть такие же свойства как в объекте `ball`, 
// а второй - как копию объекта `ball`. Проверить, содержит ли массив объектов эти объекты. Пояснить результат.

const newBall2 = ball
const res1 = products.includes(newBall)
const res2 = products.includes(newBall2)

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

// - получить из массива товаров массив из тех товаров, у которых цена больше 100.
const priceProd = products.filter(item => item.price > 100)
console.log(priceProd)

// - в массиве объектов найти первый товар категории `Tools`
const product = products.find(item => item.category ==="Tools");
console.log(product);

//  - из массива товаров получить массив имен товаров
const newArray2 = products.map((item => item.name))
console.log(newArray2)

//   - из массива товаров получить массив "уцененных" товаров. 
// В новом массиве должны быть объекты товаров, у которых цена вдвое меньше, чем у исходных товаров.

const newArray3 = products.map(item =>  {
    return {
        ...item,
        price: item.price / 2
    }
})
console.log(newArray3);


const newBall = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
}

const strings1 = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
// 3. объединить наш массив строк в одно предложениею. Результатом должна быть строка, разделенная пробелами.
let str = strings1.join(' ')
console.log(str);
//объединить наш массив чисел в одно большое число (т.е. без разделителей)
const numbers1 = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
let str1 = numbers1.join('')
console.log(str1);

// вывести в консоль массив строк в обратном порядке
const strings2 = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
let str2 = strings2.reverse()
console.log(str2);

// 4. Методы с колбэком. Перебор массива.
//  - пройтись по массиву чисел, для каждого числа вывести, является ли оно четным.
const numbers3 = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
numbers3.forEach((item) =>  {
    if (item %2 === 0) {
        console.log(item + ' is even');
    } else {
        console.log(item + ' is odd');
    }
}) 

// - из массива чисел, получить новый массив, который будет содержать квадраты чисел
const numbers4 = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
numbers4.forEach((item) => {
    const sqrt1 = item ** 2
        console.log(sqrt1);
})


// - пройтись по массиву строк, для каждой строки, если она меньше 4 символов, выводить `short`, иначе - `long`
const strings3 = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
strings3.forEach((item) => {
    if (item.length <= 4) { 
        console.log(`short`);
    } else {
        console.log(`long`);
    }
})

//  - из массива строк получить новый массив, который будет содержать массив ОБЪЕКТОВ, у которых будут свойства:
// * value - сама строка
// * size - если длина строки меньше 4 символов, то `short`, иначе - `long`
const strings4 = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
const newArray = strings4.map((item) => ({
    value: item,
    size: item.length < 4 ? 'short' : 'long'
}))
console.log(newArray);


//5. Методы с колбэком. Поиск в массиве
// - в массиве чисел, найти первое число, кратное 4
const numbers5 = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
let result10 = numbers5.findIndex(item => item % 4 === 0)
console.log(result10)

// - в массиве чисел, найти индекс первого числа, кратного 3
const numbers6 = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
const index = numbers6.findIndex(item => item % 3 === 0)
console.log(index);



// - получить из массива чисел массив только нечетных чисел
const numbers7 = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];
const oddNumbers = numbers7.filter(item => item % 2 !== 0)
console.log(oddNumbers);

// - получить из массива строк массив тех строк, у которых длина больше 5
const strings5 = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];
const newStr = strings5.filter(item => item.length > 5)
console.log(newStr)




