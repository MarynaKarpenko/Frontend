// Задача 1. Конвертация C → F
// Цельсий x 1.8 + 32 = Фаренгейт

const celsius = +prompt("Введите градусы Цельсия")
const result = celsius * 1.8 + 32;
console.log(result);


// Задача 2. Вывести стоимость заказа к оплате

const order_cost2 = 1000;
const discount2 = .15;
const discount_amount = order_cost2 * discount2;
const total_cost2 = order_cost2 - discount_amount;
console.log(total_cost2);


// Задача 3 . Логистика. Определить, в котором часу самолет вернется на базу

// самолет
// вылет в `00 ч 00 мин`
// маршрут (полетное время) - `888 ч`

alert(888 % 24);


// Задача 4. Вывести стоимость товара

// со скидкой в `20%`
// с наценкой в `10.5%`

const order_cost4 = 100;
const discount4 = .20;
const discount_amount4 = order_cost4 * discount4;
const total_cost4 = order_cost4 - discount_amount4;
console.log(total_cost4)

const margin4 = 10.5;
const margin_amount4 = order_cost4 * (margin4 / 100);
const total_margin4 = order_cost4 + margin_amount4;
console.log(total_margin4)

// Задача 5. Запросить у пользователя три числа и вывести сред/ариф. значение

const number1 = +prompt("Введите число")
const number2 = +prompt("Введите число")
const number3 = +prompt("Введите число")
const average = (number1 + number2 + number3) / 3;
console.log("Среднее арифметическое значение:", average);

// Задача 6. Запросить у пользователя число и вывести другое, которые меньше введенного на 1%

const number = +prompt("Введите число")
const percent = .01;
const less_number = number * percent;
const total_sum = number - less_number
console.log(total_sum)


// Задача. Вывести размер скидки в процентах

const order_cost = 1000;
const order_paid = 750;
const discount_percentage = ((order_cost - order_paid) / order_cost) * 100;
console.log("Размер скидки (%):", discount_percentage);
