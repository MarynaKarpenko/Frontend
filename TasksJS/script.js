// Task 2. Напишите функцию которая проверяет, 
// отрицательное число или нет (возвращает true/false)
function conclusTrueFalse(num) {
    if(num < 0) {
        return false;
    } else if(num > 0) {
        return true;
    }
    return false;
}
console.log(conclusTrueFalse(30));

// Task 3. Запросить у пользователя произвольное число 
// и вывести его, если последняя цифра, 
// на которую оно заканчивается, равна 8
function func_name() {
let userInput = +prompt("Введите Ваше число");
let lastNumber = userInput % 10;
if(lastNumber === 8) {
    console.log(`Введенное число: ${userInput}`);
} else {
    console.log(`Последняя цифра не равна 8`)
}
}
func_name()

// Task 4. Описать массив (набор) трех пользователей со 
//след/характеристиками возраст, з/п, email 
// и вывести возраст последнего (в наборе) пользователя
function func_name1() {
let users = [
    {
        age: 24,
        salary: 3000,
        email: 'iva24@example.org'
    },
    {
        age: 30,
        salary: 5000,
        email: 'ivan30@example.org'
    },
    {
        age: 56,
        salary: 300000,
        email: 'ivan56@example.org'
    },
];
console.log(users[users.length - 1].age);
}
func_name1();


// Task 5. Напишите функцию, которая получает массив различных чисел
// (положительных и отрицательных) и возвращает массив отрицательных чисел
function getNegativeNambers(arr) {
let NegativeNambers = []
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
        NegativeNambers.push(arr[i]);
    } 
    
}
return NegativeNambers

}
console.log(getNegativeNambers([30, 15, -50, -20]))


// Task 6. Запросить у сотрудника (логичистической компании) 
// ко-во часов полета транспортного средства (самолета) 
// и вывести время, в которое он вернется назад
function flightHours (arr) {
let lastHours = 0;
for (let i = 0; i < arr.length; i++) {
    if(i == arr.length - 1)
    lastHours = arr[i];
    
}
return lastHours;
}
console.log(flightHours([20, 30, 40]))



function flyTime(h) {
return h % 24
}
console.log(flyTime(30))


// второй вариант

function calculateReturnTime() {
    const flightHours = +prompt("Введите количество часов полета:");
    const returnTime = flightHours % 24;
    console.log(returnTime);
  } 


  // Task 7. Напишите функцию, которая получает массив различных чисел
// (положительных и отрицательных) и возвращает массив отрицательных чисел

function getNegativeNumbers(numbers) {
    const negativeNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        negativeNumbers.push(numbers[i]);
      }
    }
  
    return negativeNumbers;
  }


// Task 8. Написать функцию, которая принимает товары 
// (массив объектов) и возвращает строку 
// Самый дорогой товар <НАЗВАНИЕ> стоит <NN> EUR
function costProductsMaxMin (commoditys) {
let maxCost = 0;
let maxCostProduct = "";
for (let i = 0; i < commoditys.length; i++) {
    if(commoditys[i].cost > maxCost) {
        maxCost = commoditys[i].cost;
        maxCostProduct = commoditys[i].name
    }
}
return `Самый дорогой товар ${maxCostProduct} стоит ${maxCost}`
}

let commoditys = [
{
    name: "Iphone12",
    cost: 1000
},
{
    name: "Iphone13",
    cost: 1500
},
{
    name: "Iphone14",
    cost: 2000
},
]
console.log(costProductsMaxMin(commoditys));

// Task 9. Написать функцию, которая принимает два числа 
// в качестве диапазона и возвращает сумму 
// нечетных чисел в указанном диапазоне
function sumTwoNumbers(num1, num2) {
let sum = 0;
const start = Math.min(num1, num2);
const end = Math.max(num1,num2);
for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
return sum;
}
console.log(sumTwoNumbers(1, 3));


// Task 10. Написать программу, которая описывает массив 
// двух игроков, со след/полями: имя_пользователя, ущерб
// и сравнивает их ущерб между собой (у кого шансов на победу больше)
function compareUserPlayers(userPlayers) {
let maxUserDamage  = -Infinity;
let maxUserName  = "";

for (let i = 0; i < userPlayers.length; i++) {
    if (userPlayers[i].damage > maxUserDamage) {
        maxUserDamage = userPlayers[i].damage;
        maxUserName = userPlayers[i].username;
    }
}
return `Шансов на победу больше у ${maxUserName} с ущербом ${maxUserDamage}`
}

let players = [ 
{
    username: 'Player 1',
    damage: 90
},
{
    username: 'Player 2',
    damage: 150
}
];
console.log(compareUserPlayers(players));


// второй вариант
// const players = [
//     { name: "Player 1", damage: 50 },
//     { name: "Player 2", damage: 70 }
//   ];
  
//   if (players[0].damage > players[1].damage) {
//     console.log(`${players[0].name} имеет больше шансов на победу`);
  
//   } else if (players[0].damage < players[1].damage) {
//     console.log(`${players[1].name} имеет больше шансов на победу`);
  
//   } else {
//     console.log("У обоих игроков одинаковый урон");
//   }