const products = [
    {
        id: 1,
        title: "Товар 1",
        price: 1000,
        discount: 0.2,
        marks: [5, 4, 6, 7, 5],
        count: 8
    },
    {
        id: 2,
        title: "Товар 2",
        price: 1500,
        discount: 0.1,
        marks: [6, 7, 7, 6, 5],
        count: 5
    },
    {
        id: 3,
        title: "Товар 3",
        price: 800,
        discount: 0,
        marks: [5, 5, 6, 7, 6],
        count: 10
    },
    {
        id: 4,
        title: "Товар 4",
        price: 1200,
        discount: 0.15,
        marks: [7, 6, 6, 5, 7],
        count: 2
    },
    {
        id: 5,
        title: "Товар 5",
        price: 2000,
        discount: 0.25,
        marks: [6, 7, 7, 7, 6],
        count: 7
    },
    {
        id: 6,
        title: "Товар 6",
        price: 700,
        discount: 0.05,
        marks: [5, 6, 5, 7, 6],
        count: 9
    },
    {
        id: 7,
        title: "Товар 7",
        price: 1800,
        discount: 0.3,
        marks: [7, 7, 6, 6, 5],
        count: 3
    },
    {
        id: 8,
        title: "Товар 8",
        price: 1600,
        discount: 0.2,
        marks: [6, 7, 6, 5, 7],
        count: 6
    },
    {
        id: 9,
        title: "Товар 9",
        price: 900,
        discount: 0.1,
        marks: [5, 5, 6, 6, 7],
        count: 4
    },
    {
        id: 10,
        title: "Товар 10",
        price: 1300,
        discount: 0.18,
        marks: [6, 7, 6, 7, 5],
        count: 1
    }
];

// создать массив, который содержит объекты со свойствами 
// title 
// price - цена со скидкой
const result = products.map(({title, price, discount}) => ({
    title,
    price
}))
// console.log(result);

// создать массив, который состоит только из названий товаров
const nameProduct = products.map((el) => el.title)
// console.log(nameProduct);

// сформировать массив из названий товаров, которые стоят меньше 1000
const nameNewProd = products
    .filter(({price}) => price < 1000)
    .map(({title}) => title)
// console.log(nameNewProd);

// найти общую сумму всех товаров
const totalSum = products.reduce((acc, el) => acc + el.price, 0)
// console.log(totalSum);

// сформировать массив с объектами
// каждый объект содержит название, цену и оценку
const arrNamePriceCount = products.map(({title, price, marks}) => ({
    title,
    price,
    marks
}))
// console.log(arrNamePriceCount);

// сформировать массив с объектами
// каждый объект содержит название, цену и суммарную оценку
const arrNamePriceSumMarks = products.map(({title, price, marks}) => ({
    title,
    price,
    sumMark: marks.reduce((acc, el) => acc + el)
}))
// console.log(arrNamePriceSumMarks);

// сформировать массив с объектами
// каждый объект содержит название, цену и среднюю оценку
const arrNamePriceMitteMarks = products.map(({title, price, marks}) => ({
    title,
    price,
    mitteMark: marks.reduce((acc, el) => acc + el) / marks.length
}))
// console.log(arrNamePriceMitteMarks);


// используя методы массивов найти продукт с наибольшей ценой
const maxPrice = products.reduce((acc, item) => acc.price > item.price ? acc : item)
// console.log(maxPrice);

// сформировать массив, который состоит из объектов со свойствами 
// title, max_mark, min_mark
const maxMinMarks = products.map(({title, marks}) => ({
    title,
    maxMarks: marks.reduce((acc, item) => acc.marks > item.marks ? acc : item),
    minMarks: marks.reduce((acc, item) => acc.marks < item.marks ? acc : item)
}))
console.log(maxMinMarks);

// сформировать массив из объектов
// каждый объект содержит title и marks 
// marks содержит не массив из оценок, а объект в котором каждая оценка является ключем, 
// а значение - кол-во повторений
    