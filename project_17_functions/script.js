// Функции
/*
    функция - это переиспользуемый блок кода

    Math.power(10, 2) - 10 - число, 2 - степень, в которую нужно возвести число

    function Name(параметр1, параметр2, ...) {
        тело функции - алгоритм действий функции
    }
    параметр - входные данные с которыми работает функция
*/

// Function Declaration

// function makeFood() {
//     console.log("Нарезать овощи")
//     console.log("Сварить овощи")
//     console.log("Заправить овощи оливковым маслом")
//     console.log("Перемешать овощи")
// }
// makeFood() // первый раз
// makeFood() // вторай раз вызовет те же действия


// Task 1. Создать функцию, которая получает имя пользователя, переводит его в верхний регистр
// и в консоле отобр
// "Привет, {переданное имя}"

// function greeting(name) {
//     const newName = name.toUpperCase()
//     console.log("Hello, " + newName)
// }
// greeting("Maryna")
// greeting("Pavel")


// Task 2. Создать функцию, которая получает два числовых параметра и в консоли выводит
// а) сумму чисел
// б) разность 
// в) произведение
// г) деление

// function calc(num1, num2) {
//     console.log(num1 + num2)
//     console.log(num1 - num2)
//     console.log(num1 * num2)
//     console.log(num1 / num2)
// }
// calc(100, 20)
// calc(50, 5)
// calc(3, 90)


// Task 3. Создать функцию, которая получает два числа и в консоли выводит наибольшее из них
// function findMax(num1, num2) {
//     if(num1 > num2) {
//         console.log(num1)
//     } else if(num2 > num1) {
//         console.log(num2)
//     } 
// }
// findMax(1, 2) 
// findMax(20, 20)
// findMax(30, 40)


// Task 4. Создать цикл, кот выводит в конс числа от 0 до 9.
// Создать функцию кот принимает и выводит все часла от 0 до этого числа
// которое принимает в параменте

// function printNumbers(number) {
//     for(let i = 0; i <= number; i++) { 
//         console.log(i)
//     }
// }
// printNumbers(30)
// printNumbers(3)

// Task 5. Создать функцию, которая принимает массив и отображает каждый элемент массива 
// в консоли
// function showArrayElements(array) {
//     for(let i = 0; i < array.length; i++)
//     console.log(array[i])
// }
// showArrayElements([30, 2])

// Task 6. Создать функцию подсчета площади комнаты. S = a * b
// function square(width, length) {
//     console.log(width * length)
// }
// square(2, 5)
// square(30, 40)

// Task 7. Создать функцию, которая будет принимать имя и будет поздравлять с ДР
// Она должна принимать имя пользователя и в консоли отображать поздравление
// "Привет, ${имя}, Поздравляю с днем рождения!"
// function HappyBirthday(name) {
//     console.log(`Hello, ${name}, Happy Birthday!`)
// }
// HappyBirthday("Arsen")

// Task 8. Создать функцию, которая Отобр четное или нечетное число
// function everOrOdd(number) {
//     if(number % 2 == 0) {
//         console.log("четное")
//     } else {
//         console.log("нечетное")
//     }
    
// }
// everOrOdd(30)
// everOrOdd(7)

// Task 9. Создать функцию, которая принимает число и выводит массив с числами от 0 до этого числа
// function printArray(number) {
//     const arr = []
//     for(let i = 0; i < number; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
// printArray(10)



// Task 10. Создать функцию, которая запрашивает у пользователя 3 имени, с помощью for.
// Каждое введенное имя перевести в верхний регистр - toUpperCase()
// Создать массив, в который положить все имена в верхнем регистре
// В консоли отобразить итоговый массив 

// function printNames() {
//     const names = []
//     for(let i = 0; i < 3; i++) {
//         const name = prompt("Введите ваше имя")
//         const upperCasedName = name.toUpperCase()
//         names.push(upperCasedName)
//     }
//     console.log(names)
// }
// printNames()

/*
    1. let i = 0; 0 < 3 - true, const name = prompt("Введите ваше имя") -> 
            upperCasedName = "ARSEN"
            names.push("ARSEN") -> ["ARSEN"]
            , i++

    2. i = 1; 1 < 3 - true, prompt("Введите ваше имя")
            upperCasedName = "MARIA"
            names.push("MARIA") -> ["ARSEN", "MARIA"]
            , i++

    3. i = 2; 2 < 3 - true, prompt("Введите ваше имя"),
            upperCasedName = "VIKTOR",
            names.push("VIKTOR") -> ["ARSEN", "MARIA", "VIKTOR"]
            i++

    4. i = 3; 3 < 3 - false. 
*/

// Task 2
const number = 55
for(let i = 55; i >= 20; i--) {
    console.log(i)
}