// Создание элементов DOM


// 1. cresteElement() - метод создания элемента

/*
два подхода:
императивный и декларативный

    Алгоритм создания элемента
        1. Находим элемент, в который хотим положить созданный тег. querySelector()
        2. Создаем тег. createElement()
        3. Добавляем текст. innerText
        4. Добавляем созданный тег в найденный в п1 тег. appendChild()
*/ 

// const header = document.querySelector("header") // находим элемент, куда будем добавлять созданный тег
// const title = document.createElement("h1") // создаю элемент
// title.innerText = "My title"
// header.appendChild(title) // добавляем созданный элемент (title - h1) в header

// 2. innertHTML - свойство, котокое позволяет получить или назначить html содержимое тега
// const main = document.querySelector("main")
// console.log(main.innerHTML)

// Задача. в header добавать h1 с текстом myTitle
// const header = document.querySelector("header")
// header.innerHTML = "<h1> My Title </h1>"

/*
    метод querySelector возвращает null, если неправильно написали селектор
        или по заданному пути нет тега в html
*/

// Задача. Содать цикл, кот позволяет добавить 10 тегов p с текстом Hello внутрь section
// const section = document.querySelector("section");
//     for (let i = 0; i < 10; i++) {
//         section.innerHTML += "<p>Hello</p>";
//     }

// const section = document.querySelector("main section");
// for (let i = 0; i < 10; i++) {
//     section.innerHTML += "<p>Hello World</p>"; // + для добавления к имеющемуся тегу несколько тегов
// }


/*  
    1.  Свойство innerText позволяет считывать или задавать текстовое содержимое элемента. 
    При считывании текста с элемента будет возвращена строка с текстовым содержимым всех вложенных дочерних элементов. 

    2. Свойство innerHTML позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML.
*/

// Задача. Есть массив имен names. 
// Для каждого имени создать тег p и добавить его в section

// const names = ["Arsen", "Yuliya", "Lana", "Maria"]

// const section = document.querySelector("section")

// for (let i = 0; i < names.length; i++) {
//     section.innerHTML += `<p class = "text"> ${names[i]} </p>`
// }



// Задача. Есть массив объектов prodcuts. Для каждого продукта создать разметку
/*
    <div class="product">
        <h5>Назввание продукта</h5>
        <p>Цена продукта</p>
    </div>
*/
    

// const products = [
//     {
//         name: "Iphone 13",
//         price: 10000
//     },
//     {
//         name: "Iphone 14",
//         price: 20000
//     },
//     {
//         name: "Iphone 15",
//         price: 25000
//     },
// ]
// const section = document.querySelector("section")
// let sum = 0
// for (let i = 0; i < products.length; i++) {
//     sum = sum + products[i].price  
// }

// for (let i = 0; i < products.length; i++) {
//     section.innerHTML += ` <div class="product">
//                                 <h5> ${products[i].name} </h5>
//                                 <p> ${products[i].price} </p>
//                            </div> `
    
// }
// section.innerHTML += `<h1 class="summa">Сумма всех продуктов составляет ${sum}</h1>`

// Добавить в разметку <h1></h1>, в котором должна быть общая стоимость всех продуктов
// 1. с помощью цикла for посчитать сумму всех продуктов
// 2. добавить h1 в конец section, в котором указать цену


// const sumTitle = document.createElement("h1")
// sumTitle.innerText =  `<h1>Сумма продуктов составляет ${sum}</h1>`
// section.appendChild(sumTitle)


// Задача. Есть массив products. 
// 1. Для каждого объекта в массиве products создать разметку
// 2. Отобразить только те продукты, цена которых больше 10000
// 3. Отобразить только те продукты, категория которых - phone

const products = [
    {
        name: "Iphone 13",
        category: "phone",
        price: 15000
    },
    {
        name: "Iphone 14",
        category: "phone",
        price: 20000
    },
    {
        name: "Acer",
        category: "laptop",
        price: 40000
    },
    {
        name: "Asus",
        category: "laptop",
        price: 35000
    },
    {
        name: "Samsung",
        category: "TV",
        price: 27000
    },
    {
        name: "LG",
        category: "TV",
        price: 7000
    },
]

/*
    <div class="product">
        <h3> {имя продукта} </h3>
        <p> {категория продукта} </p>
        <p> {цена продукта} </p>
        <button>Купить</button>
    </div>
*/
  