// Task. Задача. Описать с помощью знакомых вам структур данных двух игроков, 
// у которых имеются след/хара-ки (свойства):
//- `имя`
//- `здоровье`
//- `ущерб`
function funcUsersDamages() {
let players = [ // массив двух объектов
	{
		username: 'Player 1',
		health: 100,
		damage: 90
	},
	{
		username: 'Player 2',
		health: 90,
		damage: 150
	}
];

console.log(players[1].health); // вывести здоровье второго игрока
}
funcUsersDamages()


// Задача. Написать функцию, которая возвращает сумму четных чисел от 1 до 10
function sum_even_numbers() {
  let sum = 0;

  for (let i = 2; i <= 10; i += 2) {
    sum += i;
  }

  return sum;
}

/// нечетные числа
function sum_even_numbers() {
    let sum = 0;
  
    for (let i = 1; i <= 10; i++) {
      if (i % 2 != 0) {
          sum += i;
      }
    }
  
    return sum;
  }

  console.log(sum_even_numbers());
  // Задача. Написать функцию, которая принимает массив чисел (оценок студента) и возвращает его средний балл
// возвращает сред/ущерб для для игроков переданных в качестве аргумента
function calc_avg_damage(players) {
    let sum = 0;
    
    for (let i = 0; i < players.length; i++) {
      sum += players[i].damage;
    }
    
    return sum / players.length;
}


let players = [ // два игрока
	{
		username: 'Player 1',
		damage: 90
	},
	{
		username: 'Player 2',
		damage: 150
	}
];

const avg_damage = calc_avg_damage(players);
console.log(`Средний ущерб для указанных игроков равен ${avg_damage}`);

// // двухмерный массив
// const users = [
//     ['Ivan', 20, 'ivan@example.org'],
//     ['Petr', 30, 'petr@example.org'],
//     ['Pavel', 40, 'pavel@example.org']
//  ];
 
//  console.log(users[0][0])  // Вывести имя 1-го юзера
//  console.log(users[2][1])  // Вывести возраст 3-го юзера
//  console.log(users[1][2])  // Вывести email 2-го юзера
 
// // Задача. Написать функцию, которая применяет скидку (возвращает значение со скидкой)
// // принимает два аргумента
// // 1. сумма заказа
// // 2. размер скидки по шкале 0 - 100
// /// возвращает сумму заказа с учетом скидки
// function cslc_discount(cost, discount) {
//     return cost * (1 - discount / 100);
// }
// console.log(cslc_discount(1000, 20)) // вернет 800

// // Задача. Написать функцию, которая получает товар (объект) с ценой в EUR и возвращает его стоимость (скаляр) в USD
// const product = {title: 'Product 1', price: 500, quantity: 10};
// function currency_exchange(product) {
//     return product.price * 1.06;
// }
// console.log(currency_exchange(product));

// Задача. Написать функцию, которая принимает радиус и возвращает площадь окружности с указанным радиусом
// function calc_area(radius) {
//     return Math.Pl * radius ** 2;
// }
// console.log(calc_area(10));