// Масcивы и циклы
// const names = ["Alexander", "Yulia", "Arsen"]

// // В консоле отобр имя Юлия из масива names
// console.log(names[1])

// // Создать масив в кот будут след часла - 10, 15, 0, 100, 21
// // Отобр в консоли число 0
// const numbers = [10, 15, 0, 100, 21]
// console.log(numbers[2])

// const arr = ["Hello", 100, true, ["Hello", "Hello World"]] // в массве могут храниться разные типы данных

// const countries = ["Germany", "France", "UK"]
// console.log(countries.length) // свойство length - длина массива или количество элиментов в нем

// countries.push("Spain") // метод push - позволяет добавить значение в конец массива
// console.log(countries.length) // 4 - длина массива увеличилась

// /*
//     Для обращения к посл эл массива используем след запись length-1
// */
// countries[countries.length-1]

// Задача. 
// Есть массив. Нужно попросить польз ввести имя, в введенное имя добавить в массив names, используя метод push
// Изм код так чтобы у польз запращивалось имя дважды и оба доьавить в массив name
// const names = ["Alexander", "Yulia", "Arsen"]
// const name = prompt("Введите Ваше имя")
// const name2 = prompt("Введите Ваше имя")
// names.push(name, name2)
// console.log(names)


// const users = [
//     {
//         name: "Arsen",
//         age: 25,
//         hobbies: ["Football", "Design", "Box"]
//     }
// ]

/* 
    массив - коллекция данных, нумерованный список. 
    В массиве можно храниться различные данные,
        например коллекцию чисел, коллекцию строк и т д
        Элементов в массиве может быть сколько угодно,
        каждый элемент хранится под своим номером(индексом)
    
    1. число 
    2. строка
    3. булевый тип - true/false - правда или ложь, верно или неверно
    4. массив (объект)
*/


// Циклы

/*
    Цикл - это повторяющиеся действия
*/

// В консоле отобр 10 раз "Hello"
// for(let i = 0; i < 10; i++) {
//     console.log("Hello")
// }


/*
1. let i = 0, 0 < 10 - true, console.log("hello"), i++ -> i = 1
2. i = 1, 1 < 10 - true, console.log("hello"), i++ -> i = 2
3. i = 2, 2 < 10 - true, console.log("hello"), i++ -> i = 3
4. i = 3, 3 < 10 - true, console.log("hello"), i++ -> i = 4
5. i = 4, 4 < 10 - true, console.log("hello"), i++ -> i = 5
6. i = 5, 5 < 10 - true, console.log("hello"), i++ -> i = 6
7. i = 6, 6 < 10 - true, console.log("hello"), i++ -> i = 7
8. i = 7, 7 < 10 - true, console.log("hello"), i++ -> i = 8
9. i = 8, 8 < 10 - true, console.log("hello"), i++ -> i = 9
10. i = 9, 9 < 10 - true, console.log("hello"), i++ -> i = 10
11. i = 10, 10 < 10 - FALSE. Выход из цикла
*/

// Задача.
// В консоле отобр текст "Hello World" 50 раз

// for(let i =0; i < 50; i++) {
//     console.log("Hello World")
// }

// Task. В console отобр числа от 1 до 100
// а. не вкл 100
// for(let i =0; i < 100; i++) {
//     console.log(i)
// }
// б. вкл 100
// for(let i =1; i < 100; i++) {
//     console.log(i + 1)
// }
// for(let i =1; i <= 100; i++) {
//     console.log(i) // второй вариант
// }


// Task. В console отобр все четные числа от 1 до 100, 
// for(let i =0; i < 100; i++) { // Если при делении на 2 в ост 0
//     if(i % 2 == 0)
//     console.log(i)
// }

/*
    1. i = 0, 0 % 2 ==
    2. i = 1, 1 % 2 = 1, - нечетное
    3. i = 2, 2 % 2 = 0, - четное. 2/2=1, значит в остатке 0. 2 делится на 2 без остатка
    4. i = 3, 3 % 2 = 1, - нечетное. 3/3=1, значит в остатке 1. 3 неделится на 2 без остатка, остаток 1
*/

/*

    +, -, /, *

    % - оператор остаток от деления

        10 % 2 = 0.   10 / 2 = 5 в остатке 0
        11 % 2 = 1.   11 / 2 = 5 в остатке 1
    Четное число при делении на 2 в ост дает 0
    Нечетное число при делении на 2 в ост дает 1
*/

/*
    Цикл for

    for (инициализация; условие; шаг) {
        тело цикла
    }

    1. инициализация - создаем счетчик. let i - iteration/итерация - повторение
    2. условие - мемент до которого нащ счетчик должен выполняться
    3. шаг - после каждого действия, увеличивается шаг счетчика до момента завершения
    i++ - увеличение пересенной на 1

    Алгоритм работы цикла:
    1.  Выполняется начало - let i = 0
    2. Выполняется условие - i < 10
        Если условие true - выполняется действие в теле цикла - console.log("Hello")

    3. Выаолняется шаг - увиличение переменной i на 1. Опять переходим к пункту 2
        Если false - выход из цикла

            let i = 0
            i = i + 1 // 1
            i+= 1
            i++ - инкремент

            i = i + 2
            i+=2 - увиличение на 2

*/

// Есть массив names. В console Отобр каждое имя из массива
// const names = ["Arsen", "Sergey", "Bogdan", "Elena"] // длина массива 4
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// Task.  Есть массив чисел numbers. Нужно вывести квадрат каждого числа чассива 
// const numbers = [10, 20, 5, 11, 6, 4]
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * numbers[i]) 
//     console.log(Math.pow(numbers[i], 2)) // второй способ возведения в степень
// }
// console.log(numbers[i]) - каждый ел массива 

// Task. Ксть массив строк. Нужно вывести в консоле каждую строку в верхнем регистре
const countries = ["Germany", "France", "Spain", "Chech"]
for(let i = 0; i < countries.length; i++) {
    // console.log(countries[0].toUpperCase())
    // console.log(countries[1].toUpperCase())
    // console.log(countries[2].toUpperCase())
    // console.log(countries[3].toUpperCase())
    console.log(countries[i].toUpperCase())
}

// for(let i = 0; i < countries.length; i++) {
//     const upperCaseCountry = countries[i].toUpperCase()
//     console.log(upperCaseCountry)
//     countries.push(upperCaseCountry) // если хотим заполнить другой массив странами в верхнем регистре
// }

/*
string.toUpperCase()
const name = "Arsen"
name.toUpperCase() -- > "ARSEN"
*/


/*
    names.length = 4
    1. i = 0; 0 < 4 - true; console.log(names[0]); i++, i = 1
    2. i = 1; 1 < 4 - true; console.log(names[0]); i++, i = 2
    3. i = 2; 2 < 4 - true; console.log(names[0]); i++, i = 3
    4. i = 3; 3 < 4 - true; console.log(names[0]); i++, i = 4
    5. i = 4; 4 < 4 - FALSE. Выход из цикла
*/

// names.length = 4
// names.length - кол. эл в массиве
