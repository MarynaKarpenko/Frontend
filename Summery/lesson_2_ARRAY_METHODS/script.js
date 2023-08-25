// Простые методы массивов
// push(элемент)
const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers); // [1,2,3,4,5,6]

// push()
// pop()
// shift()
// unshift()


// Методы массивов, принимающие функцию в качестве аргумента (callback)

// callback - функция переданнаяя в другую функцию в качестве аргумента
// функция высшего порядка (Higher-order function) - функция, которая принимает другую функцию в качестве аргумента

// forEach(() => {}) - метод массива, принимающий в качестве аргумента функцию и выполняющий функцию  один раз для КАЖДОГО элемента массива.
// Ничего не возвращает (undefined)

// map() - метод массива, принимающий в качестве аргумента функцию и выполняющий функцию  один раз для КАЖДОГО элемента массива.
// Возвращает новый массив

// map()

// filter()

// sort() - принимает функцию и возвр новый массив, мутирует исходный массив

// ПРАКТИКА

// 1. Дан массив с числами. Создать новый массив с числами из массива , в который попадут все числа из массива * 2.
const num = [2,6,17,32,9,1]; // => [4,12,34,64,18,2]
const numNew = [];
for (let i = 0; i < num.length; i++) {
    numNew.push(num[i] *2)
}
console.log(numNew);

const numNew2 = [];
num.forEach(el => numNew2.push(el * 2));
console.log(numNew2);

const numNew3 = num.map(el => el * 2);
console.log(numNew3);

// 2. Создать новый массив в кот. попадут все числа из массива увеличенные на 10
const numNew4 = [];
for (let i = 0; i < num.length; i++) {
    numNew4.push(num[i] + 10)
}
console.log(numNew4);

const numNew5 = [];
num.forEach(el => numNew5.push(el + 10));
console.log(numNew5);

const numNew6 = num.map(el => el + 10);
console.log(numNew6);


// Создать новый массив. Если число из массива >= 10, то * 3, если меньше, то оставить без изменений => [2, 6, 51, 96, 9, 1]
const numNew7 = [];
for (let i = 0; i < num.length; i++) {
    if (num[i] >= 10) {
        numNew7.push(num[i] * 3)
    } else {
        numNew7.push(num[i])
    }
}
console.log(numNew7);

const numNew8 = [];
num.forEach(el => el >= 10 ? numNew8.push(el * 3) : numNew8.push(el));
console.log(numNew8);

const numNew9 = num.map(el => el >= 10 ? el * 3 : el);
console.log(numNew6);

// ? - то
// : - или (в другом случае)
// условие ? верное условаие : не верное условие


// 4. Дан массив со именами. Создать новый массив. Если длина имени >= 5, то подставить вместо этого имени слово 'hello'. 
// Если <5 - то подставить 'hi' => ['hi', 'hi', 'hello', 'hello', 'hello', 'hi', 'hello']
const names = ['Marc', 'Anna', 'David', 'Boris', 'Irina', 'Olga', 'Ekaterina']
const namesNew = names.map(el => el.length >= 5 ? 'hello' : 'hi');
console.log(namesNew);

const namesNew2 = [];
names.forEach(el => el.length >= 5 ? namesNew2.push('hello') : namesNew2.push('hi'));
console.log(namesNew2);


// 5. Дан массив с разными типами данных. Создать новый массив, 
// в котором все числовые значения из массива array будут заменены 
// на строку 'number' => ['hello', 'number', true, 'number', 'hi', undefined, 'number']
const array = ['hello', 5, true, 78, 'hi', undefined, 1];
const arrayNew = array.map(el => typeof(el) === 'number' ? 'number' : el);
console.log(arrayNew);

const arrayNew2 = [];
array.forEach(el => typeof el === 'number' ? arrayNew2.push('number') : arrayNew2.push(el));
console.log(arrayNew2);

// Вопрос:
// В чем разница между операторами "==" и "==="?

// Ответ: 
// Разница между оператором "==" (нестрогое равенство) и оператором "===" (строгое равенство) состоит в следующем: 

// "=="  сравнивает значения после их преобразования или приведения к одному типу, а "==="  — без такого преобразования.

// Например:
// 7 == ‘7’ вернет true, а 7 === ‘7’ вернет false. 
// В первом случае не будут сравниваться типы данных (число и строка), а во втором будут.



// 6. Дан массив с разными типами данных. Создать новый массив. Все числа умножить 2, 
// а все строки заменить на 'good morning' => ['good morning', 10, true, 156, 'good morning', undefined, 2]
const array2 = ['hello', 5, true, 78, 'hi', undefined, 1];

const arrayNew3 = array2.map(el => {
    if (typeof el === 'number') {
       return el * 2
    } else if(typeof el === 'string') {
        return'good morning'
    } return el;
});
console.log(arrayNew3);