// const celsius = +prompt("Введите градусы Цельсия")
// const result = celsius * 1.8 + 32;
// console.log(result);

// const order_cost = 1000;
// const discount = .15;
// const discount_amount = order_cost * discount;
// const total_cost = order_cost - discount_amount;
// console.log(total_cost);

// const order_cost = 100;
// const discount = .20;
// const discount_amount = order_cost * discount;
// const total_cost = order_cost - discount_amount;
// console.log(total_cost)
// const margin = 10.5;
// const margin_amount = order_cost * (margin / 100);
// const total_margin = order_cost + margin_amount;
// console.log(total_margin)

// const number1 = +prompt("Введите число")
// const number2 = +prompt("Введите число")
// const number3 = +prompt("Введите число")
// const average = (number1 + number2 + number3) / 3;
// console.log("Среднее арифметическое значение:", average);

// const number = +prompt("Введите число")
// const percent = .01;
// const less_number = number * percent;
// const total_sum = number - less_number
// console.log(total_sum)

const order_cost = 1000;
const order_paid = 750;
const discount_percentage = ((order_cost - order_paid) / order_cost) * 100;
console.log("Размер скидки (%):", discount_percentage);
