// Объект
// const array = ["Hello", "Hello World", 10, true] // [0, 1, 2. 3]
// console.log(array)

// const obj = {
//     // key: value
// }

// const user = {
//     email: "test@mail.ru", // ключ/зрачение
//     name: "Maryna",
//     age: 34,
//     hobbies: ["football", "design"],
//     info: {
//         descr: "Lorem Ipsum dolor sit amet"
//     }
// }
// console.log(user)
// console.log(user.name)
// console.log(user.hobbies[0]) // сначала обращаемся к объекту, а потом к массиву

// Task
// Созд об прод со свойствами цены и назв
// Вывести в консоль значение цены

// const product = {
//     name: "Milk",
//     price: 10
// }
// console.log(product.price)
// const product2 = {
//     name: "Meat",
//     price: 20
// }
// console.log(product2.price)

// const products = [
//     {
//         name: "Milk",
//         price: 10
//     },
//     {
//         name: "Meat",
//         price: 20
//     },
//     {
//         name: "Fish",
//         price: 30
//     }
// ]

// нужно посчитать сумму стоимости всех прод 
// let sum = 0 // будет меняться
// for(let i = 0; i < products.length; i++) {
//     // console.log(products[i].price)
//     sum = sum + products[i].price
//     sum += products[i].price // второй вариант записи
// }
// console.log(sum)

/*
    products.length = 3
    1. let i = 0, 0 < 3 - true, sum = 0 + products[0].price = 10000, sum = 10000, i++, i = 1
    2. i = 1, 1 < 3 - true, sum = 10000 + products[1].price = 10000 + 15000, sum = 25000, i++, i = 2
    3. i = 2, 2 < 3 - true, sum = 25000 + products[2].price = 25000 + 20000, sum = 45000, i++, i = 3
    4. i = 3, 3 < 3 - false, выход из цикла
*/

// вывести назв второго продукта
// console.log(products[1].name) 

// // Task
// // вывести в консл назв каждого прод
// console.log(products[0].name)
// console.log(products[1].name)
// console.log(products[2].name)
// реш задачу исп цикл for

    // for(let i = 0; i < products.length; i++) { // цикл для вывода большого кол инфо и можно добавить объекты и она автоматически выведуться так же
    //     console.log(products[i].name)
    // }


/*
    obj - тип данных для хранения разл свойств
    в объекте в отл от массива не важен порядок ел

    ТИпы данных
    1. число
    2. строка
    3. булевый
    4. объект
        массив - частный случай объекта, ключами которого являются числа
*/

// Созд массив об users
// у кадл польз будут свойства: email, log, age
// const users = [
//     {
//         name: "Arsen",
//         email: "arsen@gmail.com",
//         login: "LogArsenArsen",
//         age: 16
//     },
//     {
//         name: "Maryna",
//         email: "maryna@gmail.com",
//         login: "LogMarynaMaryna",
//         age: 30
//     },
//     {
//         name: "Nelli",
//         email: "nelli@gmail.com",
//         login: "LogNelliNelli",
//         age: 40
//     },
// ]

// Отобразить в консоли login и email каждого пользователя в виде, используя цикл
// for(let i = 0; i < users.length; i++) {
//     console.log(`"Ваш email - " ${users[i].email}, а "Ваш log - " ${users[i].login}`)
// }

// отобр login пользователей возраст которых > 18

// for(let i = 0; i < users.length; i++) {
//     // console.log(users[i].age)
//     if(users[i].age > 18) {
//         console.log(users[i].login)
//     }
// }

// созд новый массив и поместить  в него польз login возраст кот > 18
// const validatedUsers = []
// for(let i = 0; i < users.length; i++) {
//     if(users[i].age > 18) {
//    validatedUsers.push(users[i].login) // push - метод кот добавляет эл в конец массива
//     }
// }
// console.log(validatedUsers)

// const validatedUsers = [] //
// for(let i = 0; i < users.length; i++) {
//     if(users[i].age > 18) {
//         validatedUsers.push({login: users[i].login, age : users[i].age}) // push - метод который добавляет элемент в конец массива
//     }
// }
// console.log(validatedUsers)

// Задача. 
// Есть массив объектов products. Нужно вывести в консоли имена только тех продуктов,
// категория которых - TV
// const products = [
//     {
//         name: "Acer",
//         catalogy: "Laptop"
//     },
//     {
//         name: "Samsung",
//         catalogy: "TV"
//     },
//     {
//         name: "Iphone 14",
//         catalogy: "phone"
//     },
//     {
//         name: "Panasonic",
//         catalogy: "TV"
//     },
// ]

// for(let i = 0; i < products.length; i++) {
//     if(products[i].catalogy == "TV")
//         console.log(products[i].name)
    
// }
/*
    length = 4
    1. let i = 0, 0 < 4 - true, products[0].category == TV - false, i++
    2. i = 1, 1 < 4 - true, products[1].category == TV - true, console.log("Samsung"), i++
    3. i = 2, 2 < 4 - true, products[2].category == TV - false, i++,
    4. i = 3, 3 < 4 - true, products[3].category == TV - true, console.log("Panasonic"), i++
    5. i = 4, 4 < 4 - false, ВЫХОД из цикла
*/